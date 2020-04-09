import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms";
import { FieldMatch } from "../helpers/fieldmatch.validator";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";
import { StatesByCountry } from "../helpers/statesbycountry"

@Component({
  selector: "register-form",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  statesArr: Array<any>;
  formHasError: Boolean;
  alternateEmailsArr: Array<string>;
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

  constructor(private fb: FormBuilder, private us: UserService) {
    this.registerForm = this.fb.group(
      {
        name: [
          "",
          Validators.compose([Validators.required, Validators.minLength(3)])
        ],

        email: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
          ])
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
        tnc: ["false", Validators.requiredTrue]
      },
      {
        validator: FieldMatch("password", "confirmpassword")
      }
    );
  }

  ngOnInit() {
    this.formHasError = false;
    this.alternateEmailsArr = [];

    this.registerForm.patchValue({
      name: "Raa",
      email: "test@abc.com",
      password: "test",
      confirmpassword: "test",

      address: {
        state: "Tamilnadu",
        country: "India",
        postcode: "123456"
      },
      timePreference: "Morning",
      tnc: true
    });

    this.getStatesByCountry("India");
    this.addAlternateEmail();
  }

  get getName() {
    return this.registerForm.get("name");
  }

  get getEmail() {
    return this.registerForm.get("email");
  }

  get getPassword() {
    return this.registerForm.get("password");
  }

  get getConfirmPassword() {
    return this.registerForm.get("confirmpassword");
  }

  get getState() {
    return this.registerForm.get("address.state");
  }

  get getCountry() {
    return this.registerForm.get("address.country");
  }

  get getPostcode() {
    return this.registerForm.get("address.postcode");
  }

  get getTimePreference() {
    return this.registerForm.get("timePreference");
  }

  get getTnc() {
    return this.registerForm.get("tnc");
  }

  get getAlternateEmails() {
    return this.registerForm.get("altEmails") as FormArray;
  }

  addAlternateEmail(){
    console.log('alternate emails', this.alternateEmailsArr);
    this.alternateEmailsArr.push('');
    this.getAlternateEmails.push(this.fb.control(''));
    console.log('alternate emails', this.alternateEmailsArr);   
  }

  getStatesByCountry(country) {
    this.statesArr = StatesByCountry(country);
  }

  removeAlternateEmail(index: number) {
    //console.log('removeAlternateEmail', index);
   // this.alternateEmailsArr.splice((index+1),1);
    //this.getAlternateEmails.removeAt(index);
  }

  saveData() {
    console.log("in savedata");

    this.formHasError = false;
  
    if (this.registerForm.valid) {
      let formValues = this.registerForm.value;
      let userModel = new User(
        0,
        formValues.name,
        formValues.email,
        formValues.password,

        formValues.address.state,
        formValues.address.country,
        formValues.address.postcode,
        formValues.timePreference,
        formValues.tnc,
        true,
        formValues.altEmails
      );
      this.us.register(userModel);
      //console.log(this.registerForm.value);
    } else {
      this.formHasError = true;
      console.log("invalid form data");
    }
  }
}
