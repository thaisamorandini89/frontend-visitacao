import React from "react";
import InputMask from "react-input-mask";
import './MaskInput.css'

const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");

const MaskInput = ({ value, onChange, name, mask, label }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value)
      }
    });
  }

  return (
    <div className="mask-input">
      <label>
        {label}
      </label>
      <InputMask
        name={name}
        mask={mask}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default MaskInput;