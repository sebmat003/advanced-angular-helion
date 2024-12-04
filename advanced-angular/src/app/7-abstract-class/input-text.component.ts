import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AbstractFormControlComponent } from './abstract-class';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field>
      <input
        matInput
        [formControl]="control"
        [placeholder]="placeholder()"
        [maxlength]="maxLength()"
        [minlength]="minLength()"
      />
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent extends AbstractFormControlComponent<string> {
  override placeholder = input<string>('Type here');
  maxLength = input<number>(20);
  minLength = input<number>(0);
}
