import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SegmentComponent } from './segment/segment.component';



@NgModule({
  declarations: [ElementHomeComponent, PlaceholderComponent, TimesDirective, SegmentComponent],
  imports: [
    SharedModule,
    CommonModule,
    ElementsRoutingModule
  ],
  //find to export
  exports :[]
})
export class ElementsModule { }
