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

//Dark mode
const modeButton = document.querySelector("#darkBtn");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
})

//Weather API
const clima = document.querySelector("#weatherToluca");
const imagenClima = document.querySelector("#weather-icon");
const subtitulo = document.querySelector("figcaption");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=19.29&lon=-99.65&appid=01ccf5847d3489282a252a11305c78dd&units=imperial';

async function buscarAPI() {
    try {
        const respuesta = await fetch(url);
        if (respuesta.ok) {
            const datos = await respuesta.json();
            //console.log(datos); //testing only
            mostrarResultados(datos);
        } else {
            throw Error (await respuesta.text());
        }
    } catch(error) {
        console.log(error);
    }
}

buscarAPI();

function mostrarResultados(datos) {
    clima.innerHTML = `${datos.main.temp}&degF`;
    const icono = `https://openweathermap.org/img/w/${datos.weather[0].icon}.png`;
    const desc = datos.weather[0].description;
    imagenClima.setAttribute('src', icono);
    imagenClima.setAttribute('alt', desc);
    subtitulo.textContent = `${desc}`;
}