import React, { Component } from 'react';
import PropTypes from 'prop-types';

const cellSize = 20;
const gridWidth = 16;
const gridHeight = 16;
const minePopulation = 1;

class Minesweeper extends Component {
    constructor() {
        super();
        this.state = {grid: []};
        this.buildGrid = this.buildGrid.bind(this);
        this.revealer = this.revealer.bind(this);
    }

    componentDidMount() {
        this.buildGrid()
    }

    revealer(id, mine) {
        if(mine && !this.state.gameOver) {
            const newState = Object.assign({}, this.state);
            const newGrid = Object.assign(
                {},
                newState,
                {...newState.grid[id].value = "revealed", gameOver: true}
            );
            this.setState(newGrid)
        } else if (!this.state.gameOver){
            const newState = Object.assign({}, this.state);
            const newGrid = Object.assign(
                {},
                newState,
                {...newState.grid[id].value = "revealed", points: newState.points + 1}
            );

            this.setState(newGrid)
        }
    }

    buildGrid() {
        let cellArray = []; // <-- Insert celery pun here
        for(let row = 0; row < gridWidth; row++) {
            for (let col = 0; col < gridHeight; col++) {
                cellArray.push({
                    x: row * cellSize,
                    y: col * cellSize,
                    value: "hidden"
                })
            }
        }
        this.setState({grid: cellArray, points: 0, gameOver: false})
    }
    render() {
        return (
            <div className="minesweeper">
                <h1>Board</h1>
                <p>Points: {this.state.points} {this.state.gameOver && "GAME OVER"}</p>
                <svg className="container" x="0" y="0"
                     width={cellSize * gridWidth}
                     height={cellSize * gridHeight}
                     viewBox={`0 0 ${cellSize * gridWidth} ${cellSize * gridHeight}`}
                     xmlns="http://www.w3.org/2000/svg">
                    {this.state.grid.map( (cell, key) => {
                        return (
                            <Cell key={key}
                                  x={cell.x}
                                  y={cell.y}
                                  value={cell.value}
                                  id={key}
                                  revealer={this.revealer}
                            />)
                    })}
                </svg>
            </div>
        );
    }
}

// Creates an array of random numbers. After page load, the numbers are immutable, but still random.
let boolRandArr = [];
function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for(let i = 0; i < (gridWidth * gridHeight); i++) {
    boolRandArr.push(between(0,9))
}
function countNeighbours(id) {
    const upDir = - 1
    const downDir = 1
    const leftDir = - gridHeight
    const rightDir = gridHeight

    const up = boolRandArr[id        + upDir                 ]
    const upLeft = boolRandArr[id    + upDir     + leftDir   ]
    const upRight = boolRandArr[id   + upDir     + rightDir  ]

    const down = boolRandArr[id      + downDir               ]
    const downLeft = boolRandArr[id  + downDir   + leftDir   ]
    const downRight = boolRandArr[id + downDir   + rightDir  ]

    const right = boolRandArr[id     + rightDir              ]
    const left = boolRandArr[id      + leftDir               ]
    const neighbourArr = [up, upLeft, upRight, down, downLeft, downRight, right, left]
    let count = 0;
    neighbourArr.forEach(neighbour => neighbour <= minePopulation && count++)
    return count;

}

export const Cell = props => {
    const mine = boolRandArr[props.id] <= minePopulation;
    const neighbours = mine ? "X" : countNeighbours(props.id)
    return (
        <g onClick={() => props.revealer(props.id, mine)}>
            <rect
                className={`cell cell--${props.value}`}
                x={props.x}
                y={props.y}
                width="20"
                height="20"
                fill={props.value === "hidden" ? "#DDD" : "#AAA"}
                stroke="black"

            />
            <text x={props.x + (gridWidth / 2)}
                  y={props.y + (gridHeight)}
                  fontFamily="Verdana"
                  fontSize="15"
                  fill={mine ? "blue" : "red"}
            >{props.value !== "hidden" && neighbours}</text>
        </g>)
};
Cell.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
};

export default Minesweeper;
