var clicks = 0;
var multiplier = 1;
var twoMulti = false;
var threeMulti = false;
var fourMulti = false;

function buyFourMulti() {
	if(fourMulti == false) {
		if(clicks >= 1000) {
			clicks -= 1000;
			document.getElementById("counter").innerHTML = clicks;
			multiplier *= 4;
			fourMulti = true;
			document.getElementById("4Button").style.visibility = "hidden";
		}
		else {
			alert("You don't have enough clicks to buy this!");
		}
	}
	else {
		alert("You already own this!");
	}
}


function buyThreeMulti() {
	if(threeMulti == false) {
		if(clicks >= 500) {
			clicks -= 500;
			document.getElementById("counter").innerHTML = clicks;
			multiplier *= 3;
			threeMulti = true;
			document.getElementById("3Button").style.visibility = "hidden";
		}
		else {
			alert("You don't have enough clicks to buy this!");
		}
	}
	else {
		alert("You already own this!");
	}
}

function buyTwoMulti() {
	if(twoMulti == false) {
		if(clicks >= 200) {
			clicks -= 200;
			document.getElementById("counter").innerHTML = clicks;
			multiplier *= 2;
			twoMulti = true;
			document.getElementById("2Button").style.visibility = "hidden";
		}
		else {
			alert("You don't have enough clicks to buy this!");
		}
	}
	else {
		alert("You already own this!");
	}
}

function bellSound() {
	var audio = new Audio('sound/ding.wav');
	audio.play();
	for (i = 0; i < multiplier; i++) {
		clicks += 1;
	}
	document.getElementById("counter").innerHTML = clicks;
}

function clickSound() {
	var audio = new Audio('sound/click.wav');
	audio.play();
}
