import { useState } from "react";
import { PasswordOptions } from "../types/passwordFieldTypes";

function PasswordField({
  options,
  label = "Enter password",
  showLabel = false,
}: {
  options: [PasswordOptions, ...PasswordOptions[]];
  label?: string;
  showLabel?: boolean;
}) {
  const [password, setPassword] = useState("");

  return (
    <div className="wrapper">
      <div className="password-input">
        <label style={{ display: showLabel ? "block" : "none" }}>{label}</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="password-validations">test</div>
    </div>
  );
}

export default PasswordField;
