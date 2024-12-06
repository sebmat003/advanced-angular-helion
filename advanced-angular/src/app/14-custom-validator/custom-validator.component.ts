import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { forbiddenNameValidator } from './forbidden-name.validator';

@Component({
  selector: 'app-custom-validator-usage',
  standalone: true,
  template: `
    <mat-form-field>
      <input matInput [formControl]="name" placeholder="Type a name" />
    </mat-form-field>

    @if (name.errors; as errors) {
      <p>
        Word <b>{{ errors['forbiddenName'].value }}</b> is forbidden. Use
        different word.
      </p>
    }
  `,
  imports: [ReactiveFormsModule, MatFormField, MatInput],
})
export class CustomValidatorComponent {
  name = new FormControl('', {
    validators: [forbiddenNameValidator(/(React|Vue)/i)], //i - case-insensitive
  });
}
