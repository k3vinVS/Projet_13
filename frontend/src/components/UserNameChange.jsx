import "../styles/userNameChange.css";

export default function UserNameChange({
  currentUser,
  setUserChange,
  handleChange,
}) {
  return (
    <div className="container-change">
      <div className="container-change-col">
        <input
          type="text"
          id="firstName"
          placeholder={currentUser.firstName}
          onChange={handleChange}
          autoComplete="false"
          // onChange={(e) => setUserFirstName(e.target.value)}
        />
        <button className="container-change-button">Save</button>
      </div>
      <div className="container-change-col">
        <input
          type="text"
          id="lastName"
          placeholder={currentUser.lastName}
          onChange={handleChange}
          // onChange={(e) => setUserLastName(e.target.value)}
        />
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
