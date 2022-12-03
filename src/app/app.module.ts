import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './feature/user/create/create-user/create-user.component';
import { ListUserComponent } from './feature/user/list/list-user/list-user.component';
import { HomeComponent } from './feature/home/home/home.component';  
import { TableModule } from 'primeng/table';

    

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUserComponent,
    HomeComponent,
    TableModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
