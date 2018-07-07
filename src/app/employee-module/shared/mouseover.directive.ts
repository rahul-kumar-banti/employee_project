import { Directive, HostBinding, HostListener, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseover]'
})
export class MouseoverDirective  implements OnInit{
  @HostBinding("class.moveoverclass") addclass=false;
  @HostListener('click') onmouseover(){
   //this.addclass=!this.addclass;
   this.render.setStyle(this.elementref.nativeElement,'color','black')
   
  }
  constructor(private elementref:ElementRef,private render:Renderer2)  { }
ngOnInit(){

}
}
