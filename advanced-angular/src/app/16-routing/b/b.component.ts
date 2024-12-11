import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-b',
  imports: [MatChipsModule],
  templateUrl: './b.component.html',
  styleUrl: './b.component.scss',
})
export class BComponent {
  readonly bestBoys: string[] = [
    'Samoyed',
    'Akita Inu',
    'Alaskan Malamute',
    'Siberian Husky',
  ];
}
