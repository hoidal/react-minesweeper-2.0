import React from 'react';
import styles from './Square.module.css';

function Square({ data, handleReveal }) {

    const getCellContents = cellData => {
        if(cellData.isRevealed) {
            if(cellData.isMine) {
                return (
                    <span>💣</span>
                );
            } else if(cellData.minesAdjacent > 0) {
                return (
                    <span>{`${cellData.minesAdjacent}`}</span>
                );
            } else {
                return <span>{null}</span>;
            }
        } else {
            return null;
        }
    }

    const cellContents = getCellContents(data);

    const getSquareStyle = squareData => {
        let squareClassName = styles.square;
        if(squareData.isRevealed) {
            squareClassName += ` ${styles.revealed}`;
        } else if(!squareData.isRevealed) {
            if(squareData.isFlagged) {
                squareClassName += ` ${styles.flagged}`;
            } else {
                squareClassName += ` ${styles.hidden}`;
            }
        }
        return squareClassName;
    }
    const squareStyling = getSquareStyle(data);

    const {x, y} = data;

    return (
        <div 
            className={squareStyling}
            onClick={(e) => handleReveal(e, [x, y])}
        >
            {cellContents}
        </div>
    )
}

export default Square;
