import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperuserserviceService } from './superuserservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	getData:any[];

  	constructor(private router: Router, private _httpService: SuperuserserviceService ) { }

	ngOnInit() {
		this._httpService.getSuperUserDetails()
      		.subscribe((res: any[]) => {
        		console.log(res);
        		this.getData = res;
      	});
  	}

	clickUpdate() {
    this.router.navigate(['profile/update']);
  }

	home1(){

		this.router.navigate(['main-page']);
	}

	/*onTestGet() {
    this._httpService.getUserDetails()
      .subscribe((res: any[]) => {
        console.log(res);
        this.getData = res;
      });
  	}*/
}
