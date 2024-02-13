import React from "react";
import "../styles/userNameChange.css";

export default function UserNameChange({ currentUser, setUserChange }) {
  return (
    <div className="container-change">
      <div className="container-change-col">
        <input type="text" placeholder={currentUser.firstName} />
        <button className="container-change-button">Save</button>
      </div>
      <div className="container-change-col">
        <input type="text" placeholder={currentUser.lastName} />
        <button
          className="container-change-button"
          onClick={() => setUserChange(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
