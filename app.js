const colors = ['darkslategrey', 'red', 'blue', 'green', 'yellow', 'purple', 'greenyellow', 'pink', 'orange', 'lightblue', 'lightgreen', 'gray', 'lightcoral', 'lightseagreen', 'lightskyblue', 'darkgreen', 'darkblue', 'darkred', 'darkgoldenrod', 'darkorange', 'darkorchid', 'darkred', 'white', 'darkviolet', 'magenta', 'violet', 'black', ''];

let line = [];
let row = [];
let cont = 1;
let color = 'black';
let square = [];
let size;

const container = document.querySelector('.container');
const newColor = document.querySelector('.newcolor');
const btnblack = document.querySelector('.btnblack');
const btneraser = document.querySelector('.btneraser');
const btnrainbow = document.querySelector('.btnrainbow');
const btnclear = document.querySelector('.btnclear')


// Remove the rainbow EventListener and changes the 'color' value whenever the 'HTML color input' is used.
newColor.addEventListener('input', e => {
    for(i = size * size; i >= 1; i--){
        square[i] = document.getElementById(`row${i}`);
        square[i].removeEventListener('mouseover', randomColor);
        square[i].removeEventListener('touchenter', randomColor);
    } 
    color = newColor.value;
})

// Remove the rainbow EventListener and set the 'color' to black when the button is pressed.
btnblack.addEventListener('click', e => {
    for(i = size * size; i >= 1; i--){
        square[i] = document.getElementById(`row${i}`);
        square[i].removeEventListener('mouseover', randomColor);
        square[i].removeEventListener('touchenter', randomColor);
    } 
    color = 'black';
})

//Remove the rainbow EventListener and set the 'color' to white when the button is pressed.
btneraser.addEventListener('click', e => {
    for(i = size * size; i >= 1; i--){
        square[i] = document.getElementById(`row${i}`);
        square[i].removeEventListener('mouseover', randomColor);
        square[i].removeEventListener('touchenter', randomColor);
    }  
    color = 'white';
})

// Get a random color from the 'colors' array.
const randomColor = () => {
    color = colors[Math.floor(Math.random() * (colors.length - 1))]; 
}

// Sets the the 'color' to rainbow.
btnrainbow.addEventListener('click', e => {
    for(i = 1; i <= size * size; i++){
        square[i] = document.getElementById(`row${i}`);
        square[i].addEventListener('mouseover', randomColor);
        square[i].addEventListener('touchenter', randomColor);
    }       
});

// Clear the entire board
btnclear.addEventListener('click', e => {
    for(i = 1; i <= size * size; i++){
        square[i].style.backgroundColor = 'white'   
    }
})

// Prompt asking the user to insert the grid SIZE to a limit of 100.
const getSize = () => {
    size = prompt('Insert the grid size. (Maximum 100)');

    while(size > 100){
        size = prompt('Insert the grid size. (Maximum 100)')
    }    
}

// Create the grid with flexbox using the SIZE as parameter.
const createGrid = (size) => { 
    for(i = 0; i < size; i++){
        line[i] = document.createElement('div');
        line[i].classList.add('lines');   
        container.appendChild(line[i]); 
    } 

    for (i = 0; i < size; i++){   
        for(j = 0; j < size; j++){
            row[j] = document.createElement('div');
            row[j].classList.add(`rows`); 
            row[j].setAttribute('id', `row${cont}`)  
            line[i].appendChild(row[j]);    
            cont++;
        }
    }
}

// Add the event 'mouseover' with the function to paint the divs with the selected color.
const addPaintFunction = () => {
    for(i = 1; i <= size * size; i++){
        square[i] = document.getElementById(`row${i}`);
        square[i].addEventListener('mouseover', e => {
            e.target.style.backgroundColor = color;
        });
        square[i].addEventListener('touchenter', e => {
            e.target.style.backgroundColor = color;
        });
    }            
}
 
// Asks for size;  Create the grid;  Add 'mouseover' paint function.
const play = () => {
    getSize();
    createGrid(size);
    addPaintFunction();
}


play();
