import { Component, OnInit, Input ,Output,EventEmitter  } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegserviceService } from './regservice.service';

@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	name: string;
	dob: string;
	phno: number;
	username :string;
	password : string;
	role :string;

	employee : Employee;  
	submitted = false;

 	constructor( private router: Router, private regService : RegserviceService) { }

 	model =  new Employee('','',0,'','','');

	ngOnInit() {

	}

	createCustomer() {
		this.submitted = true;
		this.save();
		
		//console.log(this.name);
		this.router.navigate(['listadmin']);

	}

	save() {
		this.name = this.model.name;
		this.dob = this.model.dob;
		this.phno = this.model.contact;
		this.username = this.model.username;
		this.password = this.model.pwd;
		this.role = this.model.role;
		this.employee = new Employee(this.name,this.dob,this.phno,this.username,this.password,this.role);
		this.regService.createEmployee(this.employee)
      		.subscribe(data => console.log(data), error => console.log(error));
      	 
      	 //this.router.navigate(['listadmin']);
	}

	home3(){
	  this.router.navigate(['main-page']);
	}
}
	