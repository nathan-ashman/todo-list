import './Main.css';
import 'bootstrap';
import $ from 'jquery';
import { useState } from "react";
import Errand from './Errand';
function Main() {
    let [userInput, setInput] = useState("");
    let [enteredErrand, setErrand] = useState("");
    let [listOfErrands, updateList] = useState([]);
    let [isAdded, setAddBool] = useState(false);
  return (
    <div className="main">
        <h1 className='title'>Personal Todo List</h1>
        {/* <button class="close" type="button">&#x2715;</button> */}
        <label htmlFor="thing-todo">Add to-do here...</label>
        <input type="text" id="thingtodo" name="thingtodo" value={userInput} onChange={(e)=>{
            let {target: {value}} = e;
            setInput(value);
        }} onKeyDown={(e)=>{
            if (e.key === "Enter") {
                let {target: {value}} = e;
                setErrand(value);
                listOfErrands.push(enteredErrand);
                updateList(listOfErrands);
                setAddBool(true);
            }
        }}/>
        
        {(isAdded === true ? <Errand name={enteredErrand} number={listOfErrands.length}/> : null)}

    </div>
  );
}

export default Main;
