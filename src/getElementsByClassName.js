// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var result = [];
	var hasClass = function(node) {
		for(var i = 0 ; i < node.childNodes.length; i ++){
			var children = node.childNodes[i];
			if (children.classList && children.classList.contains(className)) {
				result.push(children);
			}else{
				hasClass(children);
			}
		}
	};
	hasClass(document.body);
	return result;
};