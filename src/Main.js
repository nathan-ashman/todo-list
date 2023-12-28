import './Main.css';
import 'bootstrap';
import $ from 'jquery';
import ErrandList from './ErrandList';
import React from 'react';
import Errand from './Errand';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            listOfErrands: [],
            isAdded: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({ userInput: e.target.value });
    }

    submitHandler(){
        this.setState({ isAdded: true });
        // let formattedErrand = <li>{this.state.userInput}</li>;
        
        this.state.listOfErrands.push(<Errand errandName={this.state.userInput} num={this.state.listOfErrands.length+1}/>); //what's getting pushed here is an empty string. it is not reading the input properly.
        console.log(this.state.listOfErrands); //now we will change it to the direct userInput and see what happens.
        //ok. so that worked. so far so good: it takes the userInput and actually apends it to the array saved in state.
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        

        return (
            <div className="main">
                <h1 className='title'>Personal Todo List</h1>
                <label htmlFor="thing-todo">Add to-do here...</label>
                <input type="text" id="thingtodo" name="thingtodo" value={this.state.userInput} onChange={this.changeHandler} />
                <button type="button" className="btn btn-primary" onClick={this.submitHandler}>Enter your errand...</button>

                {/* Right so now we will simplify this and make it such that the same structure we had before 
                can be reflected in the Errand component. 
                Basic structure:
                props: errandName
                <ul>
                    <li>{props}</li>
                </ul>
                */}
                <ul>
                    {this.state.listOfErrands}
                    {/*^ ok cool. So its starting to actually reflect the inputted errand. now let's try the first element.*/}
                    {/*so test 2. it looks like it also puts the first element in the proper place looking at the 
                    element tree. The only minor gripe is that the bullet/unordered list marker stays even when 
                    there is no element to actually "add." now we will see how it treats multiple elements.
                    okay. so test2 did not get added at the end of the unordered list. so we'll improvise and make it such that each "errand" is added as a JSX <li></li> element.
                    
                    okay, success. I improvised and utilized the nature of JSX to quite literally append a JSX element 
                    as an array element; and then I simply placed the array in <ul></ul> to see how it formatted. to be
                    syntatically correct, it would be wiser to use the spread operator but for now it works. nope LMFAO. 
                    it does not like the spread operator. oh well. this works just fine.

                    next step: formatting and turning into a React Component.
                    turning it into a React Component was a success. re-incorporating the "x" and "check" buttons worked smoothly too. 
                    now we must add delete functionality.
                    */}

                </ul>

            </div>
        );
    }

}



export default Main;
