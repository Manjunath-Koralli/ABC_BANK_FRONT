import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadminserviceService } from './listadminservice.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

 constructor(private router: Router, private _httpService : ListadminserviceService,private authService:AuthService ) { }

  ngOnInit() {
  }
getData :any[];

profile1(){
	this.router.navigate(['profile']);

}
logout(){
	this.authService.logout();
	this.router.navigate(['login']);
}
reg(){
	    this.router.navigate(['register']);

}
listAdmins(){
	console.log("HELLO");
	this._httpService.getAdminDetails()
		.subscribe((res : any[])=>{
			console.log(res);

			this.getData = res;
	});
	this.router.navigate(['listadmin']);
}
}
