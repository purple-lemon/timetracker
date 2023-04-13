import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackgroundImage]'
})
export class SetBackgroundImageDirectiveDirective implements OnInit {
  @Input() imageUrl:string = "";
  constructor(private elementRef:ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
      this.renderer.setStyle(
          this.elementRef.nativeElement,
          'backgroundImage',
          `url(${this.imageUrl})`
      );
  }
}
