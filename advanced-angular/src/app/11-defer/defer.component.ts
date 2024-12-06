import { Component } from '@angular/core';
import { LargeComponent } from './large/large.component';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  imports: [LargeComponent],
})
export class DeferComponent {}
