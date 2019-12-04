import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupupdserviceService {

  constructor(private http: HttpClient) { }

  getSuperUserDetails() {
  	return this.http.get('http://localhost:8083/superuser');
  }

  updateSupuser(emp_no : number,employee: Object) {
  	console.log(emp_no);
  	console.log(employee);
    return this.http.put<Employee>('http://localhost:8083/put/employee/'+ emp_no, employee);
  }

}
