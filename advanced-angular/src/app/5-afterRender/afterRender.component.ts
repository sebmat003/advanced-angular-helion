import {
  afterNextRender,
  afterRender,
  afterRenderEffect,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  contentChild,
  ElementRef,
  inject,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-after-render',
  templateUrl: './afterRender.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AfterRenderComponent {
  element = viewChild.required<ElementRef>('element');
  counter: WritableSignal<number> = signal(0);

  protected elementHeight = 0;
  protected elementWidth = 0;
  private cdr = inject(ChangeDetectorRef);

  get nativeElement() {
    return this.element().nativeElement;
  }

  constructor() {
    // setInterval(() => {
    //   this.counter.set(this.counter() + 3);
    // }, 3000);

    afterNextRender({
      read: () => {
        this.elementWidth = this.nativeElement.getBoundingClientRect().width;
        this.cdr.markForCheck();
      },
    });

    // afterRender({
    //   write: () => {
    //     return (this.nativeElement.style.height = Math.random() * 50 + 'px');
    //   },
    //   read: (didWrite) => {
    //     if (didWrite) {
    //       this.elementHeight = this.nativeElement.clientHeight;
    //     }
    //   },
    // });

    // afterRenderEffect({
    //   write: () => {
    //     console.log('changed', this.counter());
    //   },
    // });
  }
}
