import React, { Component, Fragment } from 'react';
import GameBoard from '../components/GameBoard';
import DifficultySelector from '../components/DifficultySelector';
import { initializeBoard } from '../helpers/initializer';


const defaultBoard = initializeBoard('beginner');

class MineSweeper extends Component {

    state = {
        difficulty: '',
        board: []
    }

    handleDifficultySelection = e => (
        this.setState({ difficulty: e.target.value, board: initializeBoard(e.target.value) })
    );

    // beginner board set as default
    componentDidMount() {
        this.setState({ difficulty: 'beginner', board: defaultBoard })
    }

    render() {
        const { difficulty, board } = this.state;
        return (
            <Fragment>
                <DifficultySelector handleSelection={this.handleDifficultySelection} />
                <GameBoard difficulty={difficulty} board={board} />
            </Fragment>
        )
    }
}

export default MineSweeper;
