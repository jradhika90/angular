import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/list/dashboard.component';
import { UserdetailsComponent } from './dashboard/details/dashboard.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent , RegisterComponent, DashboardComponent, UserdetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
