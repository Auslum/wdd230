/*
1) Declare a const variable named "url" that contains the URL string of the JSON 
resource provided.
*/
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

/*
2) Declare a const variable name "cards" that selects the HTML div element from 
the document with an id value of "cards".
*/
const cards = document.querySelector('#cards');


/*
3) Create a async defined function named "getProphetData" to fetch data from the 
JSON source url using the await fetch() method.
*/
async function getProphetData() {
    const response = await fetch(url); //Store the response from the fetch() method in a const variable named "response".
    const data = await response.json(); //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    //console.table(data.prophets); //Add a console.table() expression method to check the data response at this point in the console window. Temporary testing of data retreival.
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });// end of arrow function and forEach loop
}