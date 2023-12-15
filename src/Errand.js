function Errand(props) {
    let {name, number} = props;
    return(
        <div class="form-check">
            <label class="form-check-input" for={`errand-${number}`}>{name}</label>
            <input type="checkbox" name={`errand-${number}`} value={name}/>
                <button class="close" type="button"><span aria-hidden="true">✕</span></button>
        </div>
    )
}


export default Errand;