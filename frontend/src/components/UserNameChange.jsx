// STYLES -----
import "../styles/userNameChange.css";

export default function UserNameChange({
  formData,
  setUserChange,
  handleChange,
}) {
  return (
    <div className="container-change">
      <div className="container-change-col-1">
        <input
          type="text"
          id="firstName"
          placeholder={formData.firstName}
          onChange={handleChange}
          autoComplete="false"
        />
        <input
          type="text"
          id="lastName"
          placeholder={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="container-change-col-2">
        <button className="container-change-button">Save</button>
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
