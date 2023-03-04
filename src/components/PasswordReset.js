import React, { useState } from "react";

function PasswordReset()  {
  const [text, setText] = useState("");
  const [confirmText, setConfirmText] = useState("");

  function changePassword(event) {
    setText(event.target.value);
  }

  function confirmPassword(event) {
    setConfirmText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (text === confirmText) {
      alert("Password Reset");
      setText("");
      setConfirmText("");
    } else {
      alert("Confirm password doesn't match");
      setText("");
      setConfirmText("");
    }
  }

  return (
    <div className="menu p-md-5 p-sm-0 min-vh-100">
      <div className="mx-auto py-5 bg-light loginreg w-25 rounded">
        <form onSubmit={handleSubmit} className="p-4">
          <label>Enter new Password: </label>
          <input
            value={text}
            onChange={changePassword}
            minLength="6"
            maxLength="16"
            type="password"
            className="ml-3"
          />
          <br />
          <br />
          <label>Confirm Password:  </label>
          <input
            value={confirmText}
            onChange={confirmPassword}
            minLength="6"
            maxLength="16"
            type="password"
            className="ml-3"
          />
          <br />
          <br />
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
