import React from 'react';

function DifficultySelector({ handleSelection }) {

    return (
        <div>
            <label>Select Difficulty</label>
            <select id="difficulty" onChange={handleSelection}>
                <option value="beginner">Easy</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
            </select>
        </div>
    )
}

export default DifficultySelector;
