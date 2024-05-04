class DomEvents {
    controller = null;
    board = null;
    side = 'white';
    constructor(controller) {
        this.controller = controller
        this.board = board;

        // this.initMenuActions();


    }

    initFigureSelector(resolve) {
        const figures = document.querySelectorAll('.figure');
        const parents = [];
        figures.forEach(figure => {
            parents.push(figure.parentElement);
        })

        const willBeResolved = [];

        parents.forEach(figurePosition => {
            figurePosition.addEventListener('click', () => {
                parents.forEach(figurePosition => figurePosition.classList.remove('active'));
                figurePosition.classList.add('active');
                resolve(figurePosition.classList[1], figurePosition.firstChild.classList[0]);
            })
        })
    }

    highlightMovements(position, figure) {
        const positions = document.querySelectorAll('.odd-position .even-position');
        positions.forEach(p => p.classList.remove('highlight'));

        
    }

    initMenuActions() {
        const sideChecker = document.querySelectorAll('.view.view__menu .side > div');
        const starter = document.querySelector('button');

        sideChecker[0].addEventListener('click', () => {
            sideChecker[0].classList.add('active');
            sideChecker[1].classList.remove('active');
            this.mainPlayerSide = 'white'
        })

        sideChecker[1].addEventListener('click', () => {
            sideChecker[1].classList.add('active');
            sideChecker[0].classList.remove('active');
            this.mainPlayerSide = 'black'
        })

        starter.addEventListener('click', () => {
            this.initDOMBoard()
            this.initBoard();
        })


        starter.addEventListener('click', () => {
            document.querySelector('.view.view__menu').remove();
        })
    }

    init(board) {
        this.board;
    }
}