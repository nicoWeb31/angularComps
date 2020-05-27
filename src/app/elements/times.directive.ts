import { Directive,TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewCont: ViewContainerRef,
    private tempplateRef :TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number){
    this.viewCont.clear();
    for (let i = 0 ;i<times ; i++){
      this.viewCont.createEmbeddedView(this.tempplateRef,{})
    }
  }

}
