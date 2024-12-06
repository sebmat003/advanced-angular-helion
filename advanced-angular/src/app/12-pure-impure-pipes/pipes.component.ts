import { Component } from '@angular/core';
import { TransformPurePipe } from './transform-pure.pipe';
import { TransformImpurePipe } from './transform-impure.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  imports: [
    TransformPurePipe,
    // TransformImpurePipe
  ],
})
export class PipesComponent {}
