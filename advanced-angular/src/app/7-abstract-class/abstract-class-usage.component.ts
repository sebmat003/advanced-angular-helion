import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputTextComponent } from './input-text.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-abstract-class-usage',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InputTextComponent,
    MatButtonModule,
  ],
  templateUrl: './abstract-class-usage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractClassUsageComponent {
  form = new FormGroup({
    control: new FormControl(''),
  });

  submit() {
    console.log(this.form.controls.control.getRawValue());
  }
}
