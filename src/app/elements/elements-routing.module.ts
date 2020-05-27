import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElementHomeComponent} from './element-home/element-home.component'


const routes: Routes = [
  //path empty route declared in app
  {path : '', component :ElementHomeComponent}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ElementsRoutingModule { }
