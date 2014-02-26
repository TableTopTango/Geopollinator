var choose = function(){
	var continent = prompt("Please type your continent.").toUpperCase();
	switch(continent) {
		case "AFRICA":
			document.write ("There are a lot of countries there.");
			break;
		case "NORTH AMERICA":
			document.write ("That is where I live!");
			break;
		case "AUSTRALIA":
			document.write ("Oceania is another term for that.")
			break;
		case "ASIA":
			document.write ("Most populous continent in the world.");
			break;
		case "ANTARTICA":
			document.write ("No need to study the countries there.");
			break;
		case "EUROPE":
			document.write ("The mother land, for most of the Americans.");
			break;
		case "SOUTH AMERICA":
			document.write ("The continent that nobody remembers.")
			break;
		default:
			document.write ("Never heard of that continent, try again.");
			break;
	};
};