import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PostsService } from './posts.service';
import { AdministratorComponent } from './administrator/administrator.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent, canActivate: [PostsService] },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'edit/:id', component: EditComponent, canActivate: [PostsService] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'administrator', component: AdministratorComponent },
  { path: 'userDetails/:login', component: UserDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListComponent, AddComponent, DetailComponent, EditComponent, RegistrationComponent, SignInComponent, AdministratorComponent, UserDetailsComponent];
