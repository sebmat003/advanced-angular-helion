import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  viewChild,
  ViewChild,
  viewChildren,
  ViewChildren,
} from '@angular/core';
import { SampleComponent } from './sample/sample.component';

@Component({
  selector: 'app-viewchild-contentchild',
  imports: [SampleComponent],
  templateUrl: './viewchild-contentchild.component.html',
})
export class ViewChildContentChildComponent implements OnInit {
  // @ViewChild('template', { read: TemplateRef, static: true })
  // template!: TemplateRef<any>;
  // @ViewChild('paragraph', { static: false })
  // paragraph!: ElementRef;
  // @ViewChildren(SampleComponent) sampleComponents!: QueryList<SampleComponent>;
  template = viewChild('template');
  paragraph = viewChild.required<ElementRef>('paragraph');
  sampleComponents = viewChildren(SampleComponent, {
    read: ElementRef,
    debugName: 'componentsToDebug' // for debug purpose, like external tools etc.
  });

  ngOnInit() {
    console.log('ngOnInit', this.template());
    console.log('ngOnInit', this.paragraph());
  }

  ngAfterViewInit() {
    console.log(this.template());
    console.log(this.paragraph());
    console.log(this.sampleComponents());
  }
}
