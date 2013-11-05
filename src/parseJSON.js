// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  	
  var index = 0;
  var ca = json.charAt(index);

  var next = function() {
  	if (index < json.length - 1) {
  		ca = json.charAt(index + 1);
  		index += 1;
  	}
  	else {
  		ca = undefined;
  	}
  	return ca;
  };

  var string = function() {
  	var result = '';
  	if (ca === '"') {
  		next();
  	}

  	while (ca != undefined && ca != '"') {
  		result += ca;
  		next();
  	}

  	return result;
  };

  var number = function() {
  	var result = '';
  	if (ca === '-') {
  		result = '-';
  		next();
  	}
  	while (ca >= 0 && ca <= 9 || ca === '.') {
	  	result += ca;
	  	next();
	}
	result = +result;  
  	return result;
  };

  var word = function() {
  	// I'm not really in love with this method, but it's the only one
  	// way I could get it to parse correctly.
  	if (ca === 't') {
  		next();
  		if (ca === 'r') {
  			next();
  			if (ca === 'u') {
  				next();
  				if (ca === 'e') {
  					return true;
  				}
  			}
  		}
  	}
  	if (ca === 'f') {
  		next();
  		if (ca === 'a') {
  			next();
  			if (ca === 'l') {
  				next();
  				if (ca === 's') {
  					next();
  					if (ca === 'e') {
  						return false;
  					}
  				}
  			}
  		}
  	}
  	if (ca === 'n') {
  		next();
  		if (ca === 'u') {
  			next();
  			if (ca === 'l') {
  				next();
  				if (ca === 'l') {
  					return null;
  				}
  			}
  		}
  	}
  };

  var type = function(json) {
  	if (ca === 't' || ca === 'f' || ca === 'n') {
	  return word();
	}
	if (ca  === '"') {
	  return string();
	}

	if (ca === "-" || ca >= 0 && ca <= 9) {
	  return number();
	}
  };

  return type(json);
};
