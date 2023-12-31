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
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        // this.clearHandler = this.clearHandler.bind(this);

    }

    changeHandler(e) {
        this.setState({ userInput: e.target.value });
    }

    submitHandler(){
        let currList = this.state.listOfErrands;
        currList.push(<Errand errandName={this.state.userInput} num={currList.length+1}/>); //what's getting pushed here is an empty string. it is not reading the input properly.
        this.setState({listOfErrands: currList});

    }

    
    // clearHandler(){
        
    // }
    

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        

        return (
            <div className="main">
                <h1 className='title'>Personal Todo List</h1>
                <label htmlFor="thing-todo" id="txtFldLbl">Add to-do here...</label>
                <input type="text" id="thingtodo" name="thingtodo" value={this.state.userInput} onChange={this.changeHandler} />
                <button type="button" className="btn btn-primary" id="submitBtn" onClick={this.submitHandler}>Enter your errand...</button>
                <button type="button" className="btn btn-primary" id="clearBtn">Clear List</button>
                <ul>
                    {this.state.listOfErrands}
                </ul>

            </div>
        );
    }

}



export default Main;
