import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }
  @HostBinding('style.backgroundColor')
  bgColor = 'red';

  @HostListener('mouseenter')
  changeFont() {
    this.el.nativeElement.style.display = 'inline';
    this.el.nativeElement.style.transition = 'all .3s';
    this.el.nativeElement.style.fontSize = '50px';
  }

  @HostListener('mouseleave')
  normalFont() {
    this.el.nativeElement.style.transition = 'all .3s';
    this.el.nativeElement.style.fontSize = '30px';
  }
}
