

// var map = null;
window.onload = init;

function init() {
	// getLocation();
	dynamics();
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	
}

function dynamics() {
	setInterval(handleRefresh, 3000);
}
function handleRefresh() {
	var url = "http://gumball.wickedlysmart.com/?callback=updateSales" +
			"&lastreporttime=" + lastReportTime +
			 "&random=" + (new Date()).getTime();
	var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	newScriptElement.setAttribute("id", "jsonp");

	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if (oldScriptElement == null) {
		head.appendChild(newScriptElement);
	} else {
		head.replaceChild(newScriptElement, oldScriptElement);
	}
}

function handleButtonClick() {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	if (songName == "") {
		alert("Please enter a song!");
	}
	else {
		var li = document.createElement("li");
		li.innerHTML = songName;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
	}	
}

var lastReportTime = 0
function updateSales(sales) {
	var salesDiv = document.getElementById("sales");
	for (var i = sales.length - 1; i >= 0; i--) {
		var sale = sales[i];
		var div = document.createElement("div");
		div .setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		salesDiv.appendChild(div);
	}
	if (sales.length > 0) {
		lastReportTime = sales[sales.length-1].time;
	}
}

// function getLocation() {
// 	if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition(displayLocation);
// 	}
// 	else {
// 		alert("No geolocation support!");
// 	}
// }

// function displayLocation (position) {
// 	var latitude = position.coords.latitude;
// 	var longitude = position.coords.longitude;

// 	var div = document.getElementById("location");
// 	div.innerHTML = "You are at Latitude: " + latitude + " , Longitude: " + longitude 
// 					+ " with accuracy: " + position.coords.accuracy + " meters accuracy";

// 	// showMap(position.coords);
// }

// function showMap(coords) {
// 	var googleLatAndLong = new google.maps.LatLng(coords.latitude, 
// 												  coords.longitude);
// 	var mapOptions = {
// 		zoom: 10,
// 		center: googleLatAndLong,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	};
// 	var mapDiv = document.getElementById("map");
// 	map = new google.maps.Map(mapDiv, mapOptions);
// }


















