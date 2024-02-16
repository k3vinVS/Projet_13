import { transactionsContent } from "../mocks/data";

export default function Transactions() {
  return (
    <div className="container-transaction">
      <span>{transactionsContent.date}</span>
      <span>{transactionsContent.description}</span>
      <span>{transactionsContent.amount}</span>
      <span>{transactionsContent.balance}</span>
      <div className="">
        <span>{transactionsContent.type}</span>
        <span>{transactionsContent.category}</span>
        <span>{transactionsContent.notes}</span>
      </div>
    </div>
  );
}
