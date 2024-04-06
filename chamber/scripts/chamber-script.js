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

// the setItem function
function setDate() {
	localStorage.setItem('latestVisit', today);
}