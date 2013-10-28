// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if (typeof obj === "number") {
  	return String(obj);
  }
  if (obj === null) {
  	return String(obj);
  }
  if (typeof obj === "boolean"){
  	return String(obj);
  }
  if (typeof obj === "string") {
  	return '"' + obj + '"';
  }
 if (Array.isArray(obj)) {
 	//I chose to use an array and not a string to store our stringified pieces because
 	//if we use a string, we'll have to manually add the commas separating elements, which 
 	//also means we'll need to take off the trailing comma from the end.  We can avoid this by using .join instead.
 	var holding = [];
 	for (var i = 0; i < obj.length; i++){
 		holding.push(stringifyJSON(obj[i]));
 	}
 	return '[' + holding.join(",") + ']';
 }
 if (typeof obj === "object") {
 	var holding = [];
 	for(var prop in obj) {
 		if (typeof obj[prop] === "function" || undefined) {
 			return '{}';
 		}
 		else {
 		holding.push(stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]));
 		}
 	}
 	return '{' + holding.join(",") + '}';
 }
};
