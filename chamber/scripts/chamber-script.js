//current year
const year = {year: 'numeric'};
document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', year);

//Function for the last modification date
document.querySelector('#lastUpdate').textContent = document.lastModified;

//Hamburguer menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// localStorage to store latest visit date
// Declare the variables and obtain the current date and the last "current date", which is the latest visit date
const msInADay = 86400000;
const today = Date.now();
const ultimaVisita = localStorage.getItem('latestVisit') || 0;
const daysOfDifference = (today - ultimaVisita) / msInADay; 

// Initialize display element
const latestDateElement = document.querySelector(".latestDate");
if (latestDateElement != null) {
	displayMessage();
}


// The function that will display the message depending on the last day visited
function displayMessage() {
	if (ultimaVisita == 0) {
		latestDateElement.textContent = 'Welcome! Let us know if you have any questions.';
	} else if (ultimaVisita != 0 && (today - ultimaVisita) < msInADay) {
		latestDateElement.textContent = 'Back so soon! Awesome!';
	} else if (ultimaVisita != 0 && (today - ultimaVisita) == msInADay) {
		latestDateElement.textContent = 'You last visited ' + daysOfDifference.toFixed(0) + ' day ago.';
	} else {
		latestDateElement.textContent = 'You last visited ' + daysOfDifference.toFixed(0) + ' days ago.';
	}
	setDate();
}

// The setItem function
function setDate() {
	localStorage.setItem('latestVisit', today);
}

// Current date for the timestamp in the Join Us Form
const timestamp = {timestamp: 'numeric'}


if (document.getElementById('timeStamp') !== null) {
	obtainTimestamp();
}

//The timestamp function
function obtainTimestamp() {
	document.getElementById('timeStamp').textContent = new Date().toLocaleString('en-US', timestamp);
}

//The directory part
if (document.querySelector('.directoryMain') !== null) {
	const baseURL = "https://auslum.github.io/wdd230/";
	const linksURL = "https://auslum.github.io/wdd230/chamber/data/members.json";
	const art1 = document.querySelector(".grid");

	async function getJson() {
		const respuesta = await fetch(linksURL);
		const datos = await  respuesta.json();
		//console.log(datos.members);
		displayDirectory(datos.members);
	}

	getJson();

	const displayDirectory = (members) => {
		members.forEach((miembro) => {
			let logo = document.createElement('img');
			let nombres = document.createElement('h3');
			let direccion = document.createElement('p');
			let telefono = document.createElement('p');
			let liga = document.createElement('a');
			let nivel = document.createElement('p');
			let seccion = document.createElement('section');
			
			logo.setAttribute('src', miembro.iconFile);
			logo.setAttribute('alt', `${miembro.name} logo`);
			logo.setAttribute('loading', 'lazy');
			logo.setAttribute('width', '120');
			logo.setAttribute('height', '120');

			nombres.textContent = `${miembro.name}`;
			direccion.textContent = `${miembro.address}`;
			telefono.textContent = `${miembro.phoneNumber}`;
			liga.textContent = `${miembro.url}`;
			liga.setAttribute('href', miembro.url);
			nivel.textContent = `${miembro.membershipLvl}`;
			
			seccion.appendChild(logo);
			seccion.appendChild(nombres);
			seccion.appendChild(direccion);
			seccion.appendChild(telefono);
			seccion.appendChild(liga);
			art1.appendChild(seccion);

		})
	}
}
//Code for grid and list views in directory

if (document.querySelector('.directoryMain') !== null) {
	const gridbutton = document.querySelector("#grid");
	const listbutton = document.querySelector("#list");
	const display = document.querySelector("article");

	gridbutton.addEventListener("click", () => {
		// example using arrow function
		display.classList.add("grid");
		display.classList.remove("list");
	});
	
	listbutton.addEventListener("click", showList); // example using defined function
	
	function showList() {
		display.classList.add("list");
		display.classList.remove("grid");
	}
}

//Join Us Button
if (document.querySelector('#joinUs') !== null) {
	let joinButton = document.getElementById("joinUs");
	joinButton.onclick = transferir();


	function transferir() {
		window.location("https://auslum.github.io/wdd230/chamber/join.html");
		window.location.href("https://auslum.github.io/wdd230/chamber/join.html");
	}
}





