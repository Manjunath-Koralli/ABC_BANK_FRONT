import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class SuperuserserviceService {

  constructor(private http: HttpClient) { }

  getSuperUserDetails() {
  	return this.http.get('http://localhost:8042/Myproject/superuser');
  }
}
