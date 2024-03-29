//References to the DOM elements that we will be using
const entrada = document.querySelector('#favchap');
const boton = document.querySelector('button');
const lista = document.querySelector('#list');

/*
Declare an array named chaptersArray and assign it to the results of a defined function
 named getChapterList (This function does not exist, yet).
*/
let chaptersArray = getChapterList() || []; 

/*
Use a forEach on the chaptersArray to process each entry named chapter. 
Use an arrow function within the loop to call a new defined function named 
displayList and pass it the argument of chapter. That way each entry will be processed
*/
chaptersArray.forEach(chapter => {
    displayList(chapter);
})


boton.addEventListener('click', function() {
    if (entrada.value != '') { //Check if the input is empty
        displayList(entrada.value); //call displayList with the entrada.value argument
        chaptersArray.push(entrada.value); //push the entrada.value into the chaptersArray
        setChapterList(); //update the localStorage with the new array by calling a function named setChapterList
        entrada.value = ''; //set the entrada.value to nothing
        entrada.focus(); //set the focus back to the entrada (input)
    }
});

/*
Put all the code that builds a list item from the previous button click event listener 
into this new displayList function and use the item parameter as the input
*/
function displayList(item){
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = 'X'
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    lista.append(li);
    deletebutton.addEventListener('click', function() {
        lista.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        entrada.focus(); // set the focus back to the entrada (input)
    });
}

/*
Define the setChapterList function to set the localStorage item that you 
have already named. Use JSON.stringify() to stringify the array
*/
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

//Define the getChapterList function to get the localStorage item.
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    /*
    Reformat the chapter parameter to get rid of the ❌ that is passed 
    on the end of the chapter string when we called the deleteChapter function
    */
    chapter = chapter.slice(0, chapter.length - 1); 

    /*
    Redefine the chaptersArray array using the array.filter method to 
    return everything except the chapter to be removed.
    */
   chaptersArray = chaptersArray.filter((item) => item !== chapter);
   setChapterList(); //Call the setChapterList function to update the localStorage item.
}


/*
The boton.addEventListener previous function

if(entrada.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = entrada.value;
        deleteButton.textContent = 'X';

        li.append(deleteButton);
        lista.append(li);
                
        deleteButton.addEventListener('click', function() {
            lista.removeChild(li);
            entrada.focus();
        });

        entrada.focus();
        entrada.value = '';
      
    } else {
    alert("You need to write a chapter first");
    entrada.focus();
*/




