import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  userRegister(data:any) {
    return this.http.post("http://localhost:8000/create-user",data);
  }
}
