import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appActive]"
})
export class ActiveDirective {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}
  @HostListener("click")
  onClick(): void {
    const parent = this.elementRef.nativeElement.parentNode;
    Object.values(parent.children).forEach(li => {
      this.renderer2.removeClass(li, "active");
    });
    this.renderer2.addClass(this.elementRef.nativeElement, "active");
  }
}
