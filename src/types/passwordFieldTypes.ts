export enum PasswordOptions {
  HasUppercase = "hasUppercase",
  HasNumber = "hasNumber",
  hasSymbol = "hasSymbol",
  hasNoConsecutives = "hasNoConsecutives",
}

export type PasswordValidation = {
  validationId: string;
  validationText: string;
  validator: (password: string) => boolean;
};

export interface PasswordValidations {
  [key: string]: PasswordValidation;
}
