import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { LoginserviceService } from './loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//model: ILogin = { username: "admin", password: "admin124" };
  getData :any[];
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private router: Router ,public authService: AuthService, private _httpService : LoginserviceService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/main-page';
    this.authService.logout();
  }
  
  get f() { return this.loginForm.controls; }

  loginUser(){
    this._httpService.getloginDetails()
      .subscribe((res : any[])=>{
        console.log(res);

        this.getData = res;
        //console.log(this.getData[0].username);


        if (this.loginForm.invalid) {
          return;
        }
        else{

          if(this.f.username.value == this.getData[0].username && this.f.password.value == this.getData[0].pwd){
            console.log("Login successful");
            //this.authService.authLogin(this.model);
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('token', this.f.username.value);
            this.router.navigate([this.returnUrl]);
          }
          else{
            
            this.message = "Please check your userid and password";
          
          }
        } 
    });
        
  }

}