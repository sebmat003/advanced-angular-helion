import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { Directive, inject, input } from '@angular/core';

@Directive()
export abstract class AbstractFormControlComponent<T = any>
  implements ControlValueAccessor
{
  placeholder = input<string>('Placeholder');
  ngControl = inject(NgControl);

  constructor() {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}
}
