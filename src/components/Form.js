import React from "react";
import "./Form.css";

function Form({ value, onChange, onCreate, onKeyPress }) {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        ADD
      </div>
    </div>
  );
}

export default Form;
