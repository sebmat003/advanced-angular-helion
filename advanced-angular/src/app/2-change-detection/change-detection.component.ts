import { DatePipe } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { OnPushComponent } from './on-push/on-push.component';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  imports: [DatePipe, OnPushComponent],
})
export class ChangeDetectionComponent implements OnInit {
  counter = 0;

  _time;
  get time() {
    return this._time;
  }

  constructor(zone: NgZone) {
    this._time = Date.now();

    zone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = Date.now();
      });
    });
  }
  // get time() {
  //   return Date.now();
  // }
  // https://angular.love/a-gentle-introduction-into-change-detection-in-angular

  ngOnInit(): void {
    setInterval(() => {
      this.counter = 15;
    }, 2000);
  }
}
