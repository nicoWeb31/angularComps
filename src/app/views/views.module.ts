import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponentComponent } from './views-home-component/views-home-component.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {SharedModule} from '../shared/shared.module';
import { ItemsListComponent } from './items-list/items-list.component'



@NgModule({
  declarations: [ViewsHomeComponentComponent,StatisticsComponent, ItemsListComponent],
  imports: [

  CommonModule,
  ViewsRoutingModule,
  SharedModule
  ]
})
export class ViewsModule { }
