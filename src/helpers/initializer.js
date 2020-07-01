export function initializeBoard(difficulty) {
    let board = [];
    let width, height, mines;

    switch(difficulty) {
        case 'beginner':
            width = 10;
            height = 10;
            mines = 10;
            break;
        case 'intermediate':
            width = 16;
            height = 16;
            mines = 40;
            break;
        case 'expert':
            width = 30;
            height = 16;
            mines = 99;
            break;
        default: 
            width = 10;
            height = 10;
            mines = 10;
    }

    for(let i=0; i < width; i++) {
        board.push([]);
        for(let j=0; j < height; j++) {
            board[i][j] = {
                minesAdjacent: 0,
                isMine: false,
                isEmpty: true,
                isRevealed: false,
                isFlagged: false
            };
        }
    }

    board = setMines(board, height, width, mines);
    board = getNumMinesAdjacent(board);
    return board;
}

const setMines = (board, height, width, mines) => {
    let minesPlaced = 0;
    while(minesPlaced <= mines) {
        const xCoordinate = randomizeCoordinate(width);
        const yCoordinate = randomizeCoordinate(height);
        if(!board[xCoordinate][yCoordinate].isMine) {
            board[xCoordinate][yCoordinate].isMine = true;
            board[xCoordinate][yCoordinate].isEmpty = false;
            minesPlaced++;
        }
    }
    return board;
}

const randomizeCoordinate = dimension => Math.floor(Math.random() * dimension);

const getNumMinesAdjacent = board => {
    const adjacentCoordinates = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for(let i=0; i < board.length; i++) {
        for(let j=0; j < board[i].length; j++) {
            if(board[i][j].isMine) {
                adjacentCoordinates.forEach(cell => {
                    const neighbor = [i + cell[0], j + cell[1]];
                    if(
                        neighbor[0] >= 0 
                        && neighbor[0] < board.length
                        && neighbor[1] >= 0 
                        && neighbor[1] < board[i].length
                        && !board[neighbor[0]][neighbor[1]].isMine
                    ) {
                        board[neighbor[0]][neighbor[1]].isEmpty = false;
                        board[neighbor[0]][neighbor[1]].minesAdjacent++;
                    }
                })
            }
        }
    }
    return board;
}

