import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMadirective]'
})
export class MadirectiveDirective implements OnInit {

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
      //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
  @HostListener('mouseenter') mouseEnterEvent(eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','red');
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
  }
}
