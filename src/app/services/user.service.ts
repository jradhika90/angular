import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "../models/user.model";
import { USERS } from "../db/mock-users";

@Injectable({
  providedIn: "root"
})
export class UserService {
  registerUrl = "";
  usersUrl = "";

  constructor(private http: HttpClient) {
    console.log("in service const");
  }

  deleteUser() {}

  // get users list 
  getAllUsers(searchStr=''): Observable<User[]> {
    let searchArr = [{'searchString' : searchStr}]
    //return this.http.get<any>(this.usersUrl, searchArr);
    return of(USERS);
  }

  // get user detail by Id
  getUser(userId): Observable<User> {
    let i = userId - 1;
    let selUser = USERS[i];

    return of(selUser);
  }

  getUserCount(): Observable<any>{
    let arr = [{'count': USERS.length}];
    return of(arr);
    //return this.http.get<any>(this.userCountUrl);
  }

  // registers a new user into database
  register(registerData: User) {
    console.log("in service user-> register--->" + JSON.stringify(registerData));
    //return this.http.post<any>(this.registerUrl, registerData);
    return true;
  }

  updateUser(userdata) {
     console.log("in service user-> updatedata--->" + JSON.stringify(userdata));
    //return this.http.post<any>(this.updateUserUrl, userdata);
  }
}
