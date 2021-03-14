import {
  Directive,
  Input,
  OnChanges,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighBind]',
})
export class HighbindDirective implements OnChanges {
  @Input() price: number;
  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.price = 0;
  }
  ngOnChanges(): void {
    if (this.price > 250) {
      this.renderer.setStyle(
        this.elem.nativeElement,
        'background-color',
        'red'
      );
    } else if (this.price > 100 && this.price < 250) {
      this.renderer.setStyle(
        this.elem.nativeElement,
        'background-color',
        'pink'
      );
    }
  }
}
