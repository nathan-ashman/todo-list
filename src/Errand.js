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
    let xButton = e.target;
    let mainContainer = $('.main');
    // $(xButton.parentElement).remove();
    
}


function Errand(props) {
    let {errandName, num} = props;
    return(
        <div class="form-check" id={`errand-${num}`}>
            {/* <li>{errandName}</li> */}
            <label className="form-check-input" htmlFor={`errand-${num}`}>{errandName}</label>
            <input type="checkbox" name={`errand-${num}`} value={errandName}/>
            <button className="close" type="button" onClick={deleteErrand}><span aria-hidden="true">✕</span></button>
        </div>
    )
}


export default Errand;