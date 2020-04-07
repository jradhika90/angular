import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: "user-details",
  templateUrl: "./userdetails.component.html"
})
export class UserdetailsComponent implements OnInit {
  userId: Number;
  prevUserId: Number;
  nextUserId: Number;
  selectedUser: User;
  errorMsg:String;
  totalUsers: Number;

  constructor(private us: UserService, private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    this.totalUsers = 5;
   // this.userId = parseInt(this.route.snapshot.paramMap.get("id"));
   //above statement will not work if navigating within the same component as snapshot will not reinitialize and same component and hence nginit will not be executed

  this.route.paramMap.subscribe((params: ParamMap) => {
    this.userId = parseInt(params.get("id"));
    this.prevUserId = this.userId - 1;
    this.nextUserId = this.userId + 1;

    this.viewUserDetails(this.userId);
   });
  }

  viewUserDetails(userId){
   
    console.log('in user details component function', userId);
    //this.us.getUser(userId);

    this.us.getUser(userId).subscribe(
        data => this.selectedUser = data,
        error => this.errorMsg = error.statusText
      )
      console.log('inside getuserdetails component', this.selectedUser);
  }

  previous(){
    this.router.navigate(['/user', this.prevUserId]);
  }

  next(){
    this.router.navigate(['/user', this.nextUserId]);
  }
}