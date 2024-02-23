import React from "react";

const InputForm = ({ className, type, id, content, checked, onChange }) => {
  return (
    <div className={className}>
      {className === "input-wrapper" ? (
        <>
          <label htmlFor={id}>{content}</label>
          <input type={type} id={id} onChange={onChange} />
        </>
      ) : (
        <>
          <input type={type} id={id} checked={checked} onChange={onChange} />
          <label htmlFor={id}>{content}</label>
        </>
      )}
    </div>
  );
};

export default InputForm;
