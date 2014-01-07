// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if(typeof obj === "string"){
    return '"' + obj + '"';
  }
  if(obj === null){
    return "" + obj;
  }
  if(Array.isArray(obj)){
    return "["+ obj.map(function(item){
      return stringifyJSON(item);
    }).join(",") + "]";
  }
  if(typeof obj === "object") {
    var results = [];
    for (var prop in obj){
      if(typeof obj[prop] === "function" || typeof obj[prop] === undefined) {
        return "{}";
      }else{
       results.push(stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]));
     }
    }
    return "{" + results.join(",") + "}";
  }
  return "" + obj;

};
