import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  url = input('assets/icons/icons.svg#');
  icon = input.required<string>();
  width = input(48);
  height = input(48);
}
