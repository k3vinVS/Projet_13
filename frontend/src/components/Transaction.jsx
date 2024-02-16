import { transactionsContent } from "../mocks/data";

export default function Transaction({
  date,
  description,
  amount,
  balance,
  type,
  category,
  notes,
}) {
  return (
    <div className="component-container">
      <div className="component">
        <div className="container-component-left">
          <span className="component-content">&darr; {date}</span>
          <span className="component-content">{description}</span>
        </div>
        <div className="container-component-right">
          <span className="component-content">{amount}</span>
          <span className="component-content">{balance}</span>
        </div>
      </div>
      <div className="menu-deroulant">
        <span className="component-content">Transaction Type: {type}</span>
        <span className="component-content">Category: {category}</span>
        <span className="component-content">Notes: {notes}</span>
      </div>
    </div>
  );
}
