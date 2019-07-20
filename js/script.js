function calculateInsurance(){
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var country = document.getElementById("country").value;
	var horsepower = document.getElementById("horsepower").value;
	var aus = horsepower * 100 / age + 50;
	var hun = horsepower * 120 / age + 100;
	var gre = horsepower * 150 / (age+3) + 50;
	if (country == "austria"){
		document.getElementById("calculation").innerHTML = name + ", your insurance costs " + aus + " euros.";
	} else if (country == "hungary"){
		document.getElementById("calculation").innerHTML = name + ", your insurance costs " + hun + " euros.";
	} else if (country == "greece"){
		document.getElementById("calculation").innerHTML = name + ", your insurance costs " + gre + " euros.";
	}
}

	document.getElementById("knopf").addEventListener("click", calculateInsurance, false);