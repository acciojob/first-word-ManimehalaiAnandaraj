function firstWord(str) {
  // your code here
	if(!str || !str.includes(' '))
	{
		return str;
	}
	return str.split(' ')[0];
}
// Do not change the code below

const str = prompt("Enter String:");
alert(firstWord(str));
