import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { FieldMatch } from "../helpers/fieldmatch.validator";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

@Component({
  selector: "register-form",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  statesArr: Array<any>;
  formHasError: Boolean;
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

  getStatesByCountry(country) {
    console.log(country);
    if (country == "India") {
      //this.statesArr = [
      //{"WB":"WestBengal"},
      //{"TN":"Tamilnadu"}
      // ];

      this.statesArr = ["WestBengal", "Tamilnadu"];
    } else if (country == "Australia") {
      //this.statesArr = [
      // {"VIC":"Victoria"},
      // {"NSW":"New South Wales"}
      //];
      this.statesArr = ["Victoria", "New South Wales"];
    } else {
      //this.statesArr = [{"default":"Select a country"}];
      this.statesArr = ["Select a country"];
    }
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
        ['']
      );
      this.us.register(userModel);
      //console.log(this.registerForm.value);
    } else {
      this.formHasError = true;
      console.log("invalid form data");
    }
  }
}
