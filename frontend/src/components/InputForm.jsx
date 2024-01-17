import React from "react";

const InputForm = ({ className, htmlFor, type, id, content }) => {
  return (
    <div className={className}>
      {className === "input-wrapper" ? (
        <>
          <label htmlFor={htmlFor}>{content}</label>
          <input type={type} id={id} />
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
