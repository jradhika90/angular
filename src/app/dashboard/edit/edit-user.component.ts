import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { FieldMatch } from "../../helpers/fieldmatch.validator";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { StatesByCountry } from "../../helpers/statesbycountry"
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "edit-form",
  templateUrl: "./edit-user.component.html"
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup;
  statesArr: Array<any>;
  formHasError: Boolean;
  editUser: User;
  errorMsg: String;
  userId: Number;
  //statesArr:Array<{[key: string]: string}>
  // registerForm = new FormGroup({
  //   name: new FormControl(""),
  //   email: new FormControl(""),
  //   password: new FormControl(""),
  //   confirmpassword: new FormControl(""),

  //   address: new FormGroup({
  //     state: new FormControl(""),
  //     country: new FormControl(""),
  //     postcode: new FormControl("")
  //   })
  // });

  constructor(private fb: FormBuilder, private us: UserService, private route: ActivatedRoute) {
    this.editForm = this.fb.group(
      {
        name: [
          "",
          Validators.compose([Validators.required, Validators.minLength(3)])
        ],

        password: ["", Validators.required],
        confirmpassword: [""],
        altEmails: this.fb.array([]),

        address: this.fb.group({
          state: [""],
          country: [""],
          postcode: [
            "",
            Validators.compose([
              Validators.required,
              Validators.pattern("[0-9]{6}")
            ])
          ]
        }),
        timePreference: ["", Validators.required],
        subscription: [""]
      },
      {
        validator: FieldMatch("password", "confirmpassword")
      }
    );
  }

  ngOnInit() {
    this.formHasError = false;

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = parseInt(params.get("id"));

      this.us.getUser(this.userId).subscribe(
        data => this.editUser=data,
        error => this.errorMsg=error.statusText
      );
      this.getStatesByCountry(this.editUser.country);
      this.setFormValues();
    });

    
  }

  get getName() {
    return this.editForm.get("name");
  }

  get getPassword() {
    return this.editForm.get("password");
  }

  get getConfirmPassword() {
    return this.editForm.get("confirmpassword");
  }

  get getState() {
    return this.editForm.get("address.state");
  }

  get getCountry() {
    return this.editForm.get("address.country");
  }

  get getPostcode() {
    return this.editForm.get("address.postcode");
  }

  get getTimePreference() {
    return this.editForm.get("timePreference");
  }

  get getSubscription() {
    return this.editForm.get("subscription");
  }

  getStatesByCountry(country) {
    this.statesArr = StatesByCountry(country);
  }

  setFormValues(){
    this.editForm.patchValue({
      id: this.editUser.id,
      name: this.editUser.name,
      password: this.editUser.password,
      confirmpassword: this.editUser.password,

      address: {
        state: this.editUser.state,
        country: this.editUser.country,
        postcode: this.editUser.postcode
      },
      timePreference: this.editUser.timePreference,
      subscription: this.editUser.subscription
    });
  }

  updateUser() {
    console.log("in updatedata");

    this.formHasError = false;
  
    if (this.editForm.valid) {
      let formValues = this.editForm.value;
      let userModel = new User(
        this.userId,
        formValues.name,
        this.editUser.email,
        formValues.password,

        formValues.address.state,
        formValues.address.country,
        formValues.address.postcode,
        formValues.timePreference,
        true,
        formValues.subscription,
        ['']
      );
      this.us.updateUser(userModel);
      //console.log(this.registerForm.value);
    } else {
      this.formHasError = true;
      console.log("invalid form data");
    }
  }
}
