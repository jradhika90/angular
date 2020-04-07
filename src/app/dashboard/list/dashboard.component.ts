import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  userList: Array<any>;
  errorMsg:String;
  userId: Number;

  constructor(private us: UserService, private router:Router){}
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    console.log('in get users ');
    this.us.getAllUsers().subscribe(
        users => this.userList = users,
        error => this.errorMsg = error.statusText
      )
  }

  viewUser(userId){
    this.router.navigate(["/user",userId]);
  }

  searchUsers(userValue){}
}