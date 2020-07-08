import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'add', component: AddComponent},
  { path: 'detail', component: DetailComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListComponent, AddComponent, DetailComponent];
