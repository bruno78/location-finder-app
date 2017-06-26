import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
