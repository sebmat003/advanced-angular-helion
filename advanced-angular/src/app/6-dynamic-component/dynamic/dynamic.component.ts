import {
  Component,
  input,
  OnDestroy,
  output,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
})
export class DynamicComponent implements OnDestroy {
  title = input('Count');
  closed = output<void>();
  count: WritableSignal<number> = signal(10);
  polling: ReturnType<typeof setInterval>;

  constructor() {
    this.polling = setInterval(() => {
      this.count.set(this.count() - 1);

      if (this.count() === 0) {
        this.closed.emit();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.polling);
  }
}
