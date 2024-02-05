import React from "react";

const InputForm = ({ className, htmlFor, type, id, content, handleChange }) => {
  return (
    <div className={className}>
      {className === "input-wrapper" ? (
        <>
          <label htmlFor={htmlFor}>{content}</label>
          <input type={type} id={id} onChange={handleChange} />
        </>
      ) : (
        <>
          <input type={type} id={id} />
          <label htmlFor={htmlFor}>{content}</label>
        </>
      )}
    </div>
  );
};

export default InputForm;
