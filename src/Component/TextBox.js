import React from 'react';

const TextBox = (props) => {
    return (
        <div className = "textbox">
            <label htmlFor={props.id} style={{float:'left'}}>{props.label} : </label>
            <input type={props.type} className="form-control" id={props.id} name={props.name} value={props.value} onChange={props.handleChange} />
        </div>
    );
};
export default TextBox;