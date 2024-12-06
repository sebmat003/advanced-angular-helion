import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const forbiddenNameValidator =
  (regex: RegExp): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regex.test(control.value);

    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };