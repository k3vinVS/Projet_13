import { useState } from "react";

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
  const showContent = () => {
    setIsOpen(!isOpen);
  };
  const showContentClass = isOpen ? "content visible" : "content";
  const showContentArrow = isOpen
    ? "fa fa-solid fa-chevron-up"
    : "fa fa-solid fa-chevron-down";

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
        <div className="content-hidden">Category: {category}</div>
        <div className="content-hidden">Notes: {notes}</div>
      </div>
    </div>
  );
}
