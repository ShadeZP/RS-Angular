import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter')
  itsJustFunctionsName() {
    this.highlightOn();
  }
  @HostListener('mouseleave')
  function2() {
    this.highlightOff();
  }
  private highlightOn() {
    this.renderer.addClass(this.el.nativeElement, 'pinkCard');
  }
  private highlightOff() {
    this.renderer.removeClass(this.el.nativeElement, 'pinkCard');
  }
}
