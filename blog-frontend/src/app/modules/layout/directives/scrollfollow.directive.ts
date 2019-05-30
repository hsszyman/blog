import { Directive, Input, Inject, Renderer, ElementRef, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appScrollFollow]'
})
export class ScrollfollowDirective {
  @Input('appScrollFollow') col: string;
  elem: ElementRef;
  constructor(elem: ElementRef) {
    this.elem = elem;

  }
  ngOnChanges(): void {
    console.log(this.col);
    this.elem.nativeElement.style.backgroundColor = this.col;
  }
}
