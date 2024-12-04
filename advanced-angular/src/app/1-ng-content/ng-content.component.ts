import { Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  imports: [ChildComponent],
})
export class NgContentComponent {}
