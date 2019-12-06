import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  getloginDetails() {
  	//return this.http.get('http://localhost:8085/superuser');
  	return this.http.get('http://localhost:8042/Myproject/superuser');
  }
}
