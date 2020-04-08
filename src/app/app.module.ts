import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/list/dashboard.component';
import { UserdetailsComponent } from './dashboard/details/userdetails.component';
import { PageNotFoundComponent } from './error-handler/page-not-found/page-not-found.component';
import { EditUserComponent } from './dashboard/edit/edit-user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent , RegisterComponent, DashboardComponent, UserdetailsComponent, EditUserComponent , PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
