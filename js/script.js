var person1 = {
	name : "Safa",
	height : "2.20"
};
var person2 = {
	name : "Diana",
	height : "1.70"
};
var person3 = {
	name : "dotan",
	height : "1.80"
};
var persons = [];
persons.push(person1);
persons.push(person2);
persons.push(person3);
for (var i = 0; i < persons.length; i++) {
	document.write("<div>");
	for (var param in persons[i]) {
		var person = persons[i];
		document.write(person[param]);
	};
	document.write("</div>")
;
};