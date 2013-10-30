// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var result = [];
	var searchDOM = function (element) {
		var children = element.childNodes;
		for (var i = 0; i < children.length; i++) {
			var childNode = children[i];
			if (childNode.classList && childNode.classList.contains(className)) {
				result.push(childNode);
			}
			else {
			searchDOM(childNode);
			}
		}
	};
	searchDOM(document.body);
	return result;
};