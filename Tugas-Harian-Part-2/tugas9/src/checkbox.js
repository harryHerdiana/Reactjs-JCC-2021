import "./checkbox.css"

function CheckBox(props){
    const subject = props.subject
    return(
        <section className="check-box">
          <input type="checkbox" value={subject}/>
        <label id="label-check">{subject}</label>
        </section>
    )
}

export default CheckBox;