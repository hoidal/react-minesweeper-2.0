import React, { Component, Fragment } from 'react';
import GameBoard from '../components/GameBoard';
import DifficultySelector from '../components/DifficultySelector';
import { initializeBoard } from '../helpers/initializer';
import { validateMove } from '../helpers/gameplayLogic';


const defaultBoard = initializeBoard('beginner');

class MineSweeper extends Component {
   
    state = {
        difficulty: '',
        board: []
    }

    handleDifficultySelection = e => (
        this.setState({ difficulty: e.target.value, board: initializeBoard(e.target.value) })
    );

    handleReveal = (e, coordinates) => {
        let updatedBoard = this.state.board;
        updatedBoard = validateMove(updatedBoard, coordinates);
        this.setState({ board: updatedBoard })
    }

    // beginner board set as default
    componentDidMount() {
        this.setState({ difficulty: 'beginner', board: defaultBoard })
    }

    render() {
        const { difficulty, board } = this.state;
        return (
            <Fragment>
                <DifficultySelector handleSelection={this.handleDifficultySelection} />
                <GameBoard difficulty={difficulty} board={board} handleReveal={this.handleReveal} />
            </Fragment>
        )
    }
}

export default MineSweeper;
