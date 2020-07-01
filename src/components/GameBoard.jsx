import React from 'react';
import Square from './Square';
import styles from './GameBoard.module.css';

function GameBoard({ difficulty, board }) {
    
    const createSquares = board => {
        return board.map((row, rowIndex) => {
            return row.map((column, columnIndex) => {
                return <Square key={[rowIndex+100, columnIndex]} data={board[rowIndex][columnIndex]} />;
            })
        })
    }

    const getBoardSize = difficulty => {
        let boardStyle = styles.gameboard;
        if(difficulty === 'beginner') {
            boardStyle += ` ${styles.beginner}`
        } else if(difficulty === 'intermediate') {
            boardStyle += ` ${styles.intermediate}`
        } else if(difficulty === 'expert') {
            boardStyle += ` ${styles.expert}`
        }
        return boardStyle;
    }

    const boardClassName = getBoardSize(difficulty);

    return (
        <div className={boardClassName}>
            {board.length > 0 ? createSquares(board) : null}
        </div>
    )
}

export default GameBoard;