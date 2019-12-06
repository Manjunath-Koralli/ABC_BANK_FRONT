import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../register/employee';

@Injectable({
  providedIn: 'root'
})
export class SupupdserviceService {

  constructor(private http: HttpClient) { }

  getSuperUserDetails() {
  	return this.http.get('http://localhost:8085/superuser');
  }

  updateSupuser(emp_no : number,employee: Object) {
  	console.log(emp_no);
  	console.log(employee);
    return this.http.put<Employee>('http://localhost:8042/Myproject/put/employee/'+ emp_no, employee);
  }

}
