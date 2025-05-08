import { useState } from "react";
import Icon from "react-icons-kit";
import { ic_cancel } from "react-icons-kit/md/ic_cancel";
import { ic_check_circle } from "react-icons-kit/md/ic_check_circle";
import { PasswordOptions } from "../types/passwordFieldTypes";
import {
  availablePasswordValidations,
  passwordValidations,
} from "../utils/passwordValidations";

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

  const validations = passwordValidations(
    options,
    availablePasswordValidations
  );

  return (
    <div className="wrapper">
      <div className="password-input">
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder={showLabel ? label : ""}
          id="passwordInput"
        />
      </div>
      <div className="password-validations">
        {validations.map((validation) => {
          const { validationId, validationText, validator } = validation;

          return (
            <div className="validation" key={validationId} id={validationId}>
              {validator(password.trim()) ? (
                <span className="validation-icon green">
                  <Icon size={39} icon={ic_check_circle} />
                </span>
              ) : (
                <span className="validation-icon red">
                  <Icon size={39} icon={ic_cancel} />
                </span>
              )}
              {validationText}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PasswordField;
