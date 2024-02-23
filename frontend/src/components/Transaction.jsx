import { useState } from "react";

// STYLES -----
import "../styles/transactionComponent.css";

export default function Transaction({
  date,
  description,
  amount,
  balance,
  type,
  category,
  notes,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClickedCategory, setIsClickedCategory] = useState(false);
  const [isClickedNote, setIsClickedNote] = useState(false);
  const [selectChange, setSelectChange] = useState("");
  const showContent = () => {
    setIsOpen(!isOpen);
  };
  const showContentClass = isOpen ? "content visible" : "content";
  const showContentArrow = isOpen
    ? "fa fa-solid fa-chevron-up"
    : "fa fa-solid fa-chevron-down";

  const handleChange = (e) => {
    setSelectChange(e.target.value);
  };

  return (
    <div className="component-container">
      <div className="component">
        <i className={showContentArrow} onClick={showContent}></i>
        <div className="component-content">{date}</div>
        <div className="component-content">{description}</div>
        <div className="component-content">{amount}</div>
        <div className="component-content">{balance}</div>
      </div>
      <div className={showContentClass}>
        <div className="content-hidden">Transaction Type: {type}</div>
        <div className="content-hidden">
          Category:
          {isClickedCategory ? (
            <>
              <select value={selectChange} onChange={handleChange}>
                <option value={category}>{category}</option>
                <option value="House">House</option>
              </select>
              <button onClick={() => setIsClickedCategory(false)}>Add</button>
            </>
          ) : (
            <>
              {" "}
              {category ? selectChange : category}
              <i
                className="fa fa-solid fa-pencil"
                onClick={() => setIsClickedCategory(true)}
              ></i>
            </>
          )}
        </div>
        <div className="content-hidden">
          Notes: {notes}
          {isClickedNote ? (
            <>
              <input type="text" />
              <button onClick={() => setIsClickedNote(false)}>Add</button>
            </>
          ) : (
            <i
              className="fa fa-solid fa-pencil"
              onClick={() => setIsClickedNote(true)}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}
