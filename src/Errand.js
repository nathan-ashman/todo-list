import $ from 'jquery';

function deleteErrand(e) {
    /*
        what do we want to do? Here are the steps:
        1. click on the x button
        2. have the system know we want to remove that specific element.
        3. use a DOM method to remove it from the tree.
    */

    //1. click on the x button
    console.log("i just clicked this x button!");
    
    //2. have the system know we want to remove that specific element.
    let {target: {parentElement: itemToDelete}} = e;
    
    //3. use a DOM method to remove it from the tree.
    $(itemToDelete).remove();
    /**
     * IT WORKED! we can finally delete elements when we click on the x button.
     */

    
}


function Errand(props) {
    let {errandName, num} = props;
    return(
        <li class="errand-list">
            <div class="form-check" id={`errand-${num}`}>
                <label className="form-check-input" htmlFor={`errand-${num}`}>{errandName}</label>
                <input type="checkbox" name={`errand-${num}`} value={errandName}/>
                <button className="close" type="button" onClick={deleteErrand}>✕</button>
            </div>
        </li>
        
    )
}


export default Errand;