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
    this.getUserDetails('3');
  }

  getUserDetails(userId){
    console.log('in user details component function', userId);
    //this.us.getUser(userId);

    this.us.getUser(userId).subscribe(
        data => this.selectedUser = data,
        error => this.errorMsg = error.statusText
      )
      console.log('inside getuserdetails component', this.selectedUser);
  }
}