import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home/home.component';
import { CreateUserComponent } from './feature/user/create/create-user/create-user.component';
import { ListUserComponent } from './feature/user/list/list-user/list-user.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'list', component: ListUserComponent},
  { path: 'create', component: CreateUserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
