import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor(props){
        super(props)
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: "",
        }
    }

    handleChange(input){
        this.setState({ userInput: input })
        console.log(input)
    }
    handleClick(userInput){
        let array = userInput;
        let evens = [];
        let odds = [];

        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 === 0){
                evens.push(parseInt(array[i], 10));
            } else{
                odds.push(parseInt(array[i], 10));
            }
        }

        this.setState({ evenArray: evens, oddArray: odds })
        console.log(userInput)
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Even and Odds</h4>
               <input 
               type="number"
               onChange={ (e) => this.handleChange(e.target.value) }
               className="inputLine"/>
               <button 
               onClick={ () => {this.handleChange(this.state.userInput)} }
               className="confirmationButton" >Click Here</button>
               <span className="resultsBox">evens:</span>
               <span className="resultsBox">odds:</span>
            </div>
        )
    }
}