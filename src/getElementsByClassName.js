// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var result = [];
	var hasClass = function(node) {
		var children = node.childNodes;
		for(var i = 0 ; i < children.length; i ++){
			if (children[i].classList && children[i].classList.contains(className)) {
				result.push(children[i]);
			}else{
				hasClass(children[i]);
			}
		}
	};
	hasClass(document.body);
	return result;
};