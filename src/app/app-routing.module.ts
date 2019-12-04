import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent} from './main-page/main-page.component';
import { ProfileComponent } from './main-page/profile/profile.component';
import { RegisterComponent } from './main-page/register/register.component';
import { ListadminComponent } from './main-page/listadmin/listadmin.component';
import { ProfileupdateComponent } from './main-page/profileupdate/profileupdate.component';



const routes: Routes = [ 
{ path:'',redirectTo:'login',pathMatch:'full'},
{ path:'login', component:LoginComponent },
{ path:'main-page', component:MainPageComponent},
{ path: 'profile', component: ProfileComponent},
{ path: 'profile/update',component: ProfileupdateComponent },
{path: 'register', component: RegisterComponent },
{path: 'listadmin', component: ListadminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
