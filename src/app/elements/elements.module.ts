import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';


@NgModule({
  declarations: [ElementHomeComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  //find to export
  exports :[]
})
export class ElementsModule { }
