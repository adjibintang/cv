function swapStyleSheet(){
	let mode = document.getElementById("switch").getAttribute("value");
	
	if (mode === "dark"){
		document.getElementById("mode").setAttribute('href', "./asset/css/light.css");
		document.getElementById("switch").setAttribute("value", "light");
		document.getElementById("switch").innerHTML = "OFF";
	}else{
		document.getElementById("mode").setAttribute('href', "./asset/css/stylesheet.css");
		document.getElementById("switch").setAttribute("value", "dark");
		document.getElementById("switch").innerHTML = "ON";
	}
}