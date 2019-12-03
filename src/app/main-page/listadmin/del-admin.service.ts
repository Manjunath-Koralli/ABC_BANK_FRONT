import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../register/employee';


@Injectable({
  providedIn: 'root'
})

export class DelAdminService {

  constructor(private http: HttpClient) { }

 

  delEmployee(emp_no){
  	console.log(emp_no);
    return this.http.delete(`http://localhost:8082/delete/employee/`+ emp_no, emp_no);
  }

  updateEmployee(emp_no : number,employee: Object) {
  	console.log(emp_no);
  	console.log(employee);
    return this.http.put<Employee>('http://localhost:8082/put/employee/'+ emp_no, employee);
  }

  


}
