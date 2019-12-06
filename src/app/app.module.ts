import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './main-page/profile/profile.component';
import { ListadminComponent } from './main-page/listadmin/listadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './main-page/register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileupdateComponent } from './main-page/profileupdate/profileupdate.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main-page', component: MainPageComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProfileComponent,
    ListadminComponent,
    RegisterComponent,
    LoginComponent,

    ProfileupdateComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([]),
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }




 /*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AgGridModule} from "@ag-grid-community/angular";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/



