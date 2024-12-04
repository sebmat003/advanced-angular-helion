import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
})
export class DynamicContentComponent {
  lastUpdateAt: Date = new Date();

  protected temperature = 21;

  constructor() {
    interval(5000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => (this.lastUpdateAt = new Date()));
  }
}
