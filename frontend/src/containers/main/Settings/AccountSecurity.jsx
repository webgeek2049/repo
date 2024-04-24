import React, { useState } from "react";

const AccountSecurity = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    * make sure that code work if All fields are empty, password will not be changed
    */
    if (!currentPassword && !newPassword && !confirmNewPassword) {
      console.log("All fields are empty. Ignoring submission.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setPasswordError("New Password and Confirm New Password must match.");
      return;
    }

    if (newPassword.length < 8 || newPassword.length > 14) {
      setPasswordError("Password must be between 8 and 14 characters.");
      return;
    }

    // Logic to handle password change and multi-factor authentication
    console.log("Submitting password change and MFA settings...");
  };

  return (
    <div>
      <h2 className="mb-4">Account Security</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <p className="form-control-static">
            Your email address is leghelimihoussemeddine@gmail.com
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="currentPassword" className="form-label">
            Current Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setPasswordError("");
            }}
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
          <small className="form-text text-muted">Must be 8-14 characters long.</small>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmNewPassword" className="form-label">
            Confirm New Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => {
              setConfirmNewPassword(e.target.value);
              setPasswordError("");
            }}
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="mfaEnabled"
            checked={mfaEnabled}
            onChange={() => setMfaEnabled(!mfaEnabled)}
          />
          <label htmlFor="mfaEnabled" className="form-check-label">
            Enable Multi-factor Authentication
          </label>
          <p>
            Increase your account security by requiring that a code emailed to
            you be entered when you log in. For more information on how
            multi-factor authentication works, refer to our Help Center article.
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountSecurity;
