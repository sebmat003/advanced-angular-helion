import {
  Component,
  ComponentRef,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';

@Component({
  selector: 'app-usage-of-dynamic',
  templateUrl: './usage-of-dynamic.component.html',
  imports: [DynamicContentComponent],
})
export class UsageOfDynamicComponent {
  vcr = viewChild('container', { read: ViewContainerRef });
  content = viewChild('content', { read: TemplateRef });
  componentRef?: ComponentRef<DynamicComponent>;

  createComponent() {
    this.vcr()?.clear();
    const contentView = this.vcr()?.createEmbeddedView(this.content()!);
    this.componentRef = this.vcr()?.createComponent(DynamicComponent, {
      projectableNodes: [contentView?.rootNodes as Node[]],
    });
    this.componentRef?.setInput('title', 'Weather');
    this.componentRef?.instance.closed.subscribe(() =>
      this.componentRef?.destroy(),
    );
  }

  destroyComponent() {
    this.vcr()?.clear();
  }
}
