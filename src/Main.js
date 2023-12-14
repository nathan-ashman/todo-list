import './Main.css';
import 'bootstrap';
import $, { error } from 'jquery';
import { useState } from "react";

function Main() {
    let [userInput, setInput] = useState("");
    let [listOfErrands, updateList] = useState([]);
  return (
    <div className="main">
        <h1 className='title'>Personal Todo List</h1>
        
        <label htmlFor="thing-todo">Add to-do here...</label>
        <input type="text" id="thingtodo" name="thingtodo" onChange={(e)=>{
            let {target: {value}} = e;
            setInput(value);
        }} onKeyDown={(e)=>{
            if (e.key === "Enter") {
                listOfErrands.push(userInput);
                updateList(listOfErrands);
                console.log(listOfErrands);
                /*
                <input type="checkbox" name="vehicle1" value="Bike">
                <label for="vehicle1"> I have a bike</label><br>

                here we want to create an input element and its corresponding label. 
                To create it and add it to the DOM, we'd do: 
                - document.createElement(label); document.createElement(input);
                */
                //before ANYTHING ELSE, the div container:
                let errandDiv = document.createElement("div");
                $(errandDiv).attr("class", "errand-div")
               //first, the label:
               let newLabel = document.createElement("label");
               let labelName = `errand-${listOfErrands.length}`;
               $(newLabel).prop("for", labelName);
               $(newLabel).html(userInput);
               //then the actual input:
               let newInput = document.createElement("input");
               $(newInput).prop("type", "checkbox");
               $(newInput).prop("name", labelName);
               $(newInput).val(userInput);

               $(errandDiv).append(newLabel, newInput);
                $("#root").append(errandDiv);
            }
        }}/>
        
        
    </div>
  );
}

export default Main;
