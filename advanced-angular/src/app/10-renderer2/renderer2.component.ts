import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
  styles: `
    .background-red {
      background-color: red;
    }

    .button {
      width: 100px;
    }
  `,
})
export class Renderer2Component implements AfterViewInit {
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);
  private button!: HTMLElement;
  private state = false;

  ngAfterViewInit(): void {
    this.button = this.el.nativeElement.querySelector('button');
    this.renderer.setStyle(this.button, 'transition', 'width 0.3s');

    this.listenOnHover();
  }

  listenOnHover() {
    this.renderer.listen(this.button, 'mouseover', () => {
      this.renderer.setStyle(this.button, 'width', '150px');
    });

    this.renderer.listen(this.button, 'mouseleave', () => {
      this.renderer.setStyle(this.button, 'width', '100px');
    });
  }

  changeColor() {
    this.state = !this.state;
    this.renderer[this.state ? 'addClass' : 'removeClass'](
      this.button,
      'background-red',
    );
  }
}
