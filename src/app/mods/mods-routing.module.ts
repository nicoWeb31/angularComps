import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModsComponent } from './home-mods/home-mods.component'


const routes: Routes = [
{path:'', component: HomeModsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
