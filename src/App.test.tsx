import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import PasswordField from "./components/PasswordField";
import { PasswordOptions } from "./types/passwordFieldTypes";

describe("App", () => {
  it("renders the password component with label and hasNumber validation", () => {
    const result = render(
      <PasswordField
        showLabel
        options={[PasswordOptions.HasNumber]}
        label="This is a test"
      />
    );
    const passwordField = screen.getByPlaceholderText("This is a test");
    expect(passwordField).toBeTruthy();
    const numberValidation = screen.getByText("Has a number 0-9");
    expect(numberValidation).toBeTruthy();
    const failedValidation = result.container.querySelector(".red");
    expect(failedValidation).toBeTruthy();
  });

  it("renders the password component with label and hasUppercase, hasSymbol and hasNoConsecutive validation", () => {
    const result = render(
      <PasswordField
        options={[
          PasswordOptions.HasUppercase,
          PasswordOptions.hasSymbol,
          PasswordOptions.hasNoConsecutives,
        ]}
      />
    );
    const upperCaseValidation = screen.getByText("Has uppercase Letter");
    expect(upperCaseValidation).toBeTruthy();

    const symbolValidation = screen.getByText("Has a special char !@#$%^&*");
    expect(symbolValidation).toBeTruthy();

    const noConsecutiveValidation = screen.getByText(
      "Has no identical consecutive letters"
    );
    expect(noConsecutiveValidation).toBeTruthy();

    const failedUpperCaseValidation = result.container.querySelector(".red");
    expect(failedUpperCaseValidation).toBeTruthy();

    const failedSymbolValidationValidation =
      result.container.querySelector(".red");
    expect(failedSymbolValidationValidation).toBeTruthy();

    const failedNoConsecutiveValidation =
      result.container.querySelector(".red");
    expect(failedNoConsecutiveValidation).toBeTruthy();
  });

  it("renders the password component, accepts new password and pass all validations", () => {
    const result = render(
      <PasswordField
        options={[
          PasswordOptions.HasNumber,
          PasswordOptions.HasUppercase,
          PasswordOptions.hasSymbol,
          PasswordOptions.hasNoConsecutives,
        ]}
      />
    );

    const passwordInput = screen.getByRole("textbox");

    fireEvent.change(passwordInput, { target: { value: "aG%3ljD" } });

    const passedNumberValidation = result.container.querySelector(".green");
    expect(passedNumberValidation).toBeTruthy();

    const passedUpperCaseValidation = result.container.querySelector(".green");
    expect(passedUpperCaseValidation).toBeTruthy();

    const passedSymbolValidationValidation =
      result.container.querySelector(".green");
    expect(passedSymbolValidationValidation).toBeTruthy();

    const passedNoConsecutiveValidation =
      result.container.querySelector(".green");
    expect(passedNoConsecutiveValidation).toBeTruthy();
  });
});
