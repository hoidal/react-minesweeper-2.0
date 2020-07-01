export function validateMove(updatedBoard, selection) {
    const [x, y] = selection;
    let board = updatedBoard
    if(board[x][y].isRevealed) {
        board[x][y].exploded = true;
        return [board, 'game over']
    } else if(board[x][y].isMine) {
        board[x][y].isRevealed = true;
    }else if(board[x][y].minesAdjacent > 0) {
        board[x][y].isRevealed = true;
    } else if(board[x][y].isEmpty) {
        revealDfs(board, x, y)
    }
    return board;
}

const revealDfs = (board, x, y) => {
    const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    if(!validMove(board, x, y) || board[x][y].isRevealed) {
        return board;
    } else if(board[x][y].minesAdjacent > 0) {
        board[x][y].isRevealed = true;
        return board;
    }

    board[x][y].isRevealed = true;
    for(let neighbor of neighbors) {
        revealDfs(board, x + neighbor[0], y + neighbor[1]);
    }
}

const validMove = (board, x, y) => {
    if(x < 0 || y < 0 || x >= board.length || y >= board[0].length) return false;
    return true;
}