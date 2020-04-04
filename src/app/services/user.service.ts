import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn:'root'
})

export class UserService {
    registerUrl = '';

    constructor(private http: HttpClient) { 
      console.log('in service const');
    }

    register(registerData: User){
      console.log('in service user-> register--->'+JSON.stringify(registerData));
      //return this.http.post<any>(this.registerUrl, registerData);
      return true;
    }
  
    getAll(){}
    search(){}
    delete(){}
    update(){}
}