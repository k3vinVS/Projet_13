import "../styles/userNameChange.css";

export default function UserNameChange({
  formData,
  setUserChange,
  handleChange,
}) {
  
  return (
    <div className="container-change">
      <div className="container-change-col">
        <input
          type="text"
          id="firstName"
          placeholder={formData.firstName}
          onChange={handleChange}
          autoComplete="false"
        />
        <button className="container-change-button">Save</button>
      </div>
      <div className="container-change-col">
        <input
          type="text"
          id="lastName"
          placeholder={formData.lastName}
          onChange={handleChange}
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
