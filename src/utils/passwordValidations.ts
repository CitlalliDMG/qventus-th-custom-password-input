import {
  PasswordOptions,
  PasswordValidations,
} from "../types/passwordFieldTypes";

export const availablePasswordValidations: PasswordValidations = {
  hasSymbol: {
    validationId: "hasSymbol",
    validationText: "Has a special char !@#$%^&*",
    validator: (password: string) => {
      return /[!@#$%^&*]/.test(password);
    },
  },
  hasNumber: {
    validationId: "hasNumber",
    validationText: "Has a number 0-9",
    validator: (password: string) => {
      return /\d/.test(password);
    },
  },
  hasUppercase: {
    validationId: "hasUppercase",
    validationText: "Has uppercase Letter",
    validator: (password: string) => {
      return /[A-Z]/.test(password);
    },
  },
  hasNoConsecutives: {
    validationId: "hasNoConsecutives",
    validationText: "Has no identical consecutive letters",
    validator: (password: string) => {
      return Boolean(password.length) && !/([a-z])\1/i.test(password);
    },
  },
};

export const passwordValidations = (
  desiredValidations: [PasswordOptions, ...PasswordOptions[]],
  validationsAvailables: PasswordValidations
) => {
  const validations = [];
  for (const key of desiredValidations) {
    if (Object.hasOwn(validationsAvailables, key)) {
      validations.push(validationsAvailables[key]);
    }
  }
  return validations;
};
