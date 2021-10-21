import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    handleChange(change) {
        this.setState({ userInput: change })
        console.log(change)
    }

    handleClick(input) {
        let array = input;
        let even = [];
        let odd = [];

        for(let num = 0; num < array.length; num++){
            if(array[num] % 2 == 0){
                even.push(parseInt(array[num], 10))
            } else {
                odd.push(parseInt(array[num], 10))
            }
        }
        this.setState({ evenArray: even, oddArray: odd })
        console.log(even, odd)
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input 
                className="inputLine" 
                onChange={(e) => {this.handleChange(e.target.value)}}/>
                <button 
                className="confirmationButton"
                onClick={(e)=> {this.handleClick(this.state.userInput)}}>Submit here</button>
                <span className="resultsBox">evens: {this.state.evenArray}</span>
                <span className="resultsBox">odds: {this.state.oddArray}</span>
            </div>
        )
    };
};