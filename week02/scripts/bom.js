const entrada = document.querySelector('#favchap');
const boton = document.querySelector('button');
const lista = document.querySelector('#list');



boton.addEventListener('click', function() {
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
}});





