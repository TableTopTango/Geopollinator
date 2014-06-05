function converter(){
	var convert = parseFloat(document.getElementById("NorthSouth").value);
	var convert2 = parseFloat(document.getElementById("EastWest").value);
	var newconvert = (convert + 90)*(106.546/45.208834);
	var newconvert2 = (convert2 + 180)*(284.434/112.846791);

	document.writeln(newconvert2);
	document.writeln(",");
	document.writeln(newconvert);
	document.writeln("L");
};