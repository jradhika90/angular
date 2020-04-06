import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";

@Component({
  selector: "user-details",
  templateUrl: "./userdetails.component.html"
})
export class UserdetailsComponent implements OnInit {
  userId: Number;
  selectedUser: User;
  errorMsg:String;

  constructor(private us: UserService){}
  ngOnInit() {
    this.getUserDetails('1');
  }

  getUserDetails(userId){
    console.log('in user details component function', userId);
    this.us.getUser(userId);

    // this.us.getAllUsers().subscribe(
    //     data => this.selectedUser = data,
    //     error => this.errorMsg = error.statusText
    //   )
  }
}