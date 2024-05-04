const boardDOM = document.querySelector('.display');

const board = new Board(boardDOM)
const controller = new Controller(board);
const domEvents = new DomEvents(controller, board);

board.getDomEvents(domEvents);

domEvents.initFigureSelector((position, figure) => {
    domEvents.highlightMovements(position,figure);
})

window.controller = controller;