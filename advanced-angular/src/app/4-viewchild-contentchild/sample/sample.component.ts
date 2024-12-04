import {
  Component,
  contentChild,
  contentChildren,
  effect,
  ElementRef,
  input,
} from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
})
export class SampleComponent {
  value = input.required();
  list = contentChildren('element', {
    read: ElementRef,
    descendants: true, // for all nested child component that has this #element somewhere
  });
  title = contentChild<ElementRef>('title');

  constructor() {
    effect(() => {
      console.log(this.list());
      console.log(this.title()?.nativeElement.textContent);
    });
  }
}
