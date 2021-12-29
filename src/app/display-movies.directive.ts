import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayMovies]'
})
export class DisplayMoviesDirective {
  constructor(private templRef:TemplateRef<any>, private viewRef:ViewContainerRef) { }
  @Input() set appDisplayMovies(condition:boolean){
    if(condition){
//this.templRef.createEmbeddedView(this.templRef);
this.viewRef.createEmbeddedView(this.templRef);
    }else{
this.viewRef.clear();
    }
  }

  

}
