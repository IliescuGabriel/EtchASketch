let color = 'black'
let click = true

const populateBoard = (size) => {
    const board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    const amount = size * size
    for ( let i = 0; i < amount; i++){
        const squares = document.createElement('div')
        squares.addEventListener('mouseover', colorSquare)
        squares.style.backgroundColor = 'grey'
        board.insertAdjacentElement("beforeend", squares)
    }
}

populateBoard(16)


function changeSize(input){
    if (input > 0 && input < 100){
        populateBoard(input)
    } else {
        console.log('Too many squares! Choose between 0 ad 100.')
    }
}
function colorSquare(){
    if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}   

function changeColor(choice){
    color = choice;
}

function resetBoard() {
    let square = document.querySelectorAll("div");
    square.forEach((div) => (div.style.backgroundColor = "white"));
}