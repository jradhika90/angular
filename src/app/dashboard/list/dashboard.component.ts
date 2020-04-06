import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  userList: Array<any>;
  errorMsg:String;

  constructor(private us: UserService){}
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

  searchUsers(userValue){}
}