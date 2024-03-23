//current year
const year = {year: 'numeric'};
document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', year);

//Function for the last modification date
document.querySelector('#lastUpdate').textContent = document.lastModified;

