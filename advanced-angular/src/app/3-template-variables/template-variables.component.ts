import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
})
export class TemplateVariablesComponent {
  value = 'text';
  condition = true;
}
