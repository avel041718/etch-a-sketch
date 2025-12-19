const container = document.getElementById("grid-container");
const resizeBtn = document.getElementById("resizeBtn");
const resetBtn = document.getElementById("resetBtn");

function createGrid(size) {
    container.innerHTML='';
    const squareSize =960/size;

    for (let i = 0; i <size * size; i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width =`${squareSize}px`;
        square.style.height =`${squareSize}px`;

        square.addEventListener('mouseover',() => {
            square.style.backgroundColor ='black';
        });
        container.appendChild(square);
        }

    }
     createGrid(16);

     resizeBtn.addEventListener('click', () => {
        let newSize=parseInt(prompt('enter number of square per side(max 100):'),10);
        if(newSize > 100) newSize = 100;
        if(newSize <1 || isNaN (newSize)) newSize =16;
        createGrid(newSize);


     });
     resetBtn.addEventListener ('click',() =>{
        const square = document.querySelectorAll('.grid-square');
        square.forEach(square => {
            square.style.backgroundColor = 'white';
            square.style.filter ='';
        });
     });

     
