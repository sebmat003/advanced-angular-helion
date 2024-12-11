import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  imports: [RouterOutlet, RouterLink],
})
export class RoutingComponent {}
