import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  imports: [AsyncPipe, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent {
  @Input() set counter(c: number) {
    this.counter$.next(c);
  }
  counter$ = new BehaviorSubject<number>(0);
  myObject = { name: 'John', age: 20 };

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.counter$.next(1);

    setInterval(() => {
      this.myObject.age = 21;
      this.cdr.markForCheck();
    }, 2000);
  }
}
