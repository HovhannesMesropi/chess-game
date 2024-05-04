class Controller {
    
    board = null;

    constructor(board) {
        this.board = board;
    }


    selectPosition(withPosition) {
        for (const position in this.board.domBoard) {
            this.board.domBoard[position].classList.remove('active');
        }
        this.domBoard[withPosition].classList.add('active');
    }

    moveFigure(withPosition) {

    }
}