import { Component, OnInit } from '@angular/core';
import { SupupdserviceService } from './supupdservice.service';
import { Employee } from '../register/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {

  getData:any[];
  constructor(private router: Router,private _httpService: SupupdserviceService) { }
  employee : Employee;
  //suser =  new Employee('','',0,'','','');


  ngOnInit() {
  	this._httpService.getSuperUserDetails()
      		.subscribe((res: any[]) => {
        		console.log(res);
        		this.getData = res;
    });
  }

  update() {
  		//console.log(this.getData);
  		
  		//console.log(this.getData[0].empId);

  		this.employee = new Employee(this.getData[0].name,this.getData[0].dob,this.getData[0].contact,this.getData[0].username,this.getData[0].pwd,this.getData[0].role);
        this.employee.empId = this.getData[0].empId;
        //console.log(this.employee);
        //console.log(id);
        this._httpService.updateSupuser(this.getData[0].empId,this.employee)
        	.subscribe(data => console.log(data));
        this.router.navigate(['profile']);
  }

}
