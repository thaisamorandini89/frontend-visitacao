import './TextAreaField.css'

const TextAreaField = (props) => {

    const update = (e) => {
        props.write(e.target.value)
    }

    return (
        <div className="text-area-field">
            <label>
                {props.label}
            </label>
            <textarea required={props.required} placeholder={props.placeholder} 
                value={props.value} onChange={update} rows={props.rows} cols={props.cols}/>
        </div>
    )
}

export default TextAreaField