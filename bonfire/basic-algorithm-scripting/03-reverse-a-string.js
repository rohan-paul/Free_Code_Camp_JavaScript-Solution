function reverseString(str) {
	var newStr = ""
	for (var i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}

alert(reverseString('hello'));

function reverseStringShort(str) {
	return str.split('').reverse().join('');
}

alert(reverseStringShort('hello'));