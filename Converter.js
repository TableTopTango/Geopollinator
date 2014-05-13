function converter(){
	var convert = parseFloat(document.getElementById("NorthSouth").value);
	var convert2 = parseFloat(document.getElementById("EastWest").value);
	var newconvert = (convert + 90)*(1000./360);
	var newconvert2 = (convert2 + 180)*(1000./360);
	document.writeln(newconvert);
	
	document.writeln(newconvert2);
}