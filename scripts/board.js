class Board {

    DOMElement = null;
    figures = [
        'empty',
        'pawn',
        'rook',
        'knight',
        'bishop',
        'queen',
        'king',

    ];

    numbersToSymbols = {
        1: 'h',
        2: 'g',
        3: 'f',
        4: 'e',
        5: 'd',
        6: 'c',
        7: 'b',
        8: 'a'
    }



    mainPlayerSide = 'white'
    board = [];
    domBoard = {};
    domEvents = null;
    constructor(boardDOM) {
        this.DOMElement = boardDOM;
        this.initBoard();
        this.initDOMBoard();
        this.initFiguresPositions();
    }

    getDomEvents(domEvents) {
        this.domEvents = domEvents;
        this.domEvents.init(this);
    }

    initDOMBoard() {
        const gameElement = this.DOMElement.querySelector('.view.view__game');
        const lines = []
        for (let i = 0; i < 8; i++) {
            const isOdd = i % 2;
            const line = document.createElement('div')
            line.classList.add(isOdd ? 'odd-line' : 'even-line')
            gameElement.append(line);
            lines.push(line);
        }
        for (let i = 0; i < 8; i++) {
            const currentLine = lines[i];
            for (let j = 0; j < 8; j++) {
                const isOdd = j % 2;
                const position = document.createElement('div')
                this.domBoard[`${this.numbersToSymbols[i + 1]}${j + 1}`] = position;
                position.classList.add(isOdd ? 'odd-position' : 'even-position')
                position.classList.add(`${this.numbersToSymbols[i + 1]}${j + 1}`)
                currentLine.appendChild(position);
            }
        }
    }

    initBoard() {
        for (let i = 0; i < 8; i++) {
            this.board[i] = [];
            for (let j = 0; j < 8; j++) {
                if (i === 1 || i === 6) {
                    this.board[i].push(this.figures[1]);
                }

                if (i > 1 && i < 6) {
                    this.board[i].push(this.figures[0]);
                }

                if ((i === 0 || i === 7) && (j < 6 || j > 5)) {
                    if (j === 7 || j === 0) {
                        this.board[i].push(this.figures[2])
                    }
                    if (j === 1 || j === 6) {
                        this.board[i].push(this.figures[3])
                    }
                    if (j === 2 || j === 5) {
                        this.board[i].push(this.figures[4])
                    }
                }
            }
        }

        const bigFiguresStartLine = this.board[0].slice(0, 3);

        bigFiguresStartLine.push(this.figures[5]);
        bigFiguresStartLine.push(this.figures[6]);

        const newOfficersLine = [...bigFiguresStartLine, ...this.board[0].slice(0, 3).reverse()];

        this.board = this.board.map((line, index) => {
            if (index === 0 || index === 7) {
                return newOfficersLine
            }
            return line
        })
    }

    initFiguresPositions() {
        for (let position in this.domBoard) {
            const letter = position[0];
            const number = Number(position[1]);
            if (letter === 'b') {
                const pawn = document.createElement('div');
                pawn.classList.add('pawn-f', 'figure');
                this.domBoard[position].appendChild(pawn);
            }

            if (letter === 'g') {
                const pawn = document.createElement('div');
                pawn.classList.add('pawn-b', 'figure');
                this.domBoard[position].appendChild(pawn);
            }

            if (letter === 'a' && (number === 1 || number === 8)) {
                const rock = document.createElement('div');
                rock.classList.add('rock-f', 'figure');
                this.domBoard[position].appendChild(rock);
            }

            if (letter === 'h' && (number === 1 || number === 8)) {
                const rock = document.createElement('div');
                rock.classList.add('rock-b', 'figure');
                this.domBoard[position].appendChild(rock);
            }

            if (letter === 'a' && (number === 2 || number === 7)) {
                const horse = document.createElement('div');
                horse.classList.add('horse-f', 'figure');
                this.domBoard[position].appendChild(horse);
            }

            if (letter === 'h' && (number === 2 || number === 7)) {
                const horse = document.createElement('div');
                horse.classList.add('horse-b', 'figure');
                this.domBoard[position].appendChild(horse);
            }

            if (letter === 'a' && (number === 3 || number === 6)) {
                const officer = document.createElement('div');
                officer.classList.add('officer-f', 'figure');
                this.domBoard[position].appendChild(officer);
            }

            if (letter === 'h' && (number === 3 || number === 6)) {
                const officer = document.createElement('div');
                officer.classList.add('officer-b', 'figure');
                this.domBoard[position].appendChild(officer);
            }

            if (letter === 'a' && number === 4) {
                const queen = document.createElement('div');
                queen.classList.add('queen-f', 'figure');
                this.domBoard[position].appendChild(queen);
            }

            if (letter === 'a' && number === 5) {
                const queen = document.createElement('div');
                queen.classList.add('king-f', 'figure');
                this.domBoard[position].appendChild(queen);
            }

            if (letter === 'h' && number === 4) {
                const queen = document.createElement('div');
                queen.classList.add('queen-b', 'figure');
                this.domBoard[position].appendChild(queen);
            }

            if (letter === 'h' && number === 5) {
                const queen = document.createElement('div');
                queen.classList.add('king-b', 'figure');
                this.domBoard[position].appendChild(queen);
            }
        }
    }
}