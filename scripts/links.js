const baseURL = "https://auslum.github.io/wdd230/";
const linksURL = "https://auslum.github.io/wdd230/data/links.json";
const tarjeta = document.querySelector(".card1");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {

    const weekUl = document.createElement('ul');

    weeks.forEach((semana) => {
        
        let weekLi = document.createElement('li');
        let weekAA = document.createElement('a');

        weekLi.textContent = `${semana.week} : `;
        //weekA.textContent = `${semana.links[0].title}`;
        //weekA.setAttribute("href", semana.links[0].url);
        weekAA.innerHTML = `${semana.links.map (l => `<a href="${l.url}">${l.title}</a>`).join(" | ")}`;

        /*weeks.forEach((semana) => {
            let weekAA = document.createElement('a');
            
            //weekAA.setAttribute("href", semana.links[0].url);
            weekLi.appendChild(weekAA);
        });*/

        weekLi.appendChild(weekAA);
        weekUl.appendChild(weekLi);
        
    });
    tarjeta.appendChild(weekUl);
}