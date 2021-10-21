import React, { Component } from "react";

export default class FilterObject extends Component {
    constructor (props) {
        super(props)
        this.state = {
            unFilteredArray: [
                {id: 1, brand: "Vear", powerSource: "Quartz", size: 36},
                {id: 2, brand: "Citizen", powerSource: "Solar", size: 40},
                {id: 3, brand: "Burtucci", powerSource: "Quartz", size: 36}
            ],
            userInput: "",
            filteredArray: []
        }
    };

    handleChange(change) {
        this.setState({ userInput: change })
    }

    handleClick(input) {

    }

    render() {
        
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">UnFiltered Array</span>
                <input 
                className="inputLine" 
                onChange={(e) => {this.handleChange(e.target.value)}}/>
                <button 
                className="confirmationButton"
                onClick={() => {this.handleChange(this.state.userInput)}}>Enter</button>
                <span className="resultsBox filterObjectRB">Filtered Array</span>
            </div>
        )
    };
};