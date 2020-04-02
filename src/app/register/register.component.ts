import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl,FormBuilder, Validators } from "@angular/forms";
import {FieldMatch} from "../helpers/fieldmatch.validator"
 
@Component({
  selector: "register-form",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  statesArr: Array<any>;
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

constructor(private fb: FormBuilder){
 this.registerForm = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    
    email: ['', Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
    password: ['', Validators.required],
    confirmpassword: [''],

    address: this.fb.group({
      state: [''],
      country: [''],
      postcode: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]{6}')])],
     }),
     timePreference:['Morning'],
     tnc:['', Validators.requiredTrue]
  },
  {
    validator: FieldMatch("password", "confirmpassword")
  });
}

  ngOnInit() {
    this.registerForm.patchValue({
      name: "Ra",
      email: "test@abc",
      password: "test",
      confirmpassword:"testing",

      address: {
        state: "default",
        country: "India",
        postcode: "123"
      },
      timePreference: "",
      tnc: false
    });

    this.getStatesByCountry("India");
  }
  
  get getName() {
    return this.registerForm.get('name');
  }

  get getEmail() {
    return this.registerForm.get('email');
  }

  get getPassword() {
    return this.registerForm.get('password');
  }

  get getConfirmPassword() {
    return this.registerForm.get('confirmpassword');
  }

  get getState() {
    return this.registerForm.get('address.state');
  }

  get getCountry() {
    return this.registerForm.get('address.country');
  }

  get getPostcode() {
    return this.registerForm.get('address.postcode');
  }

  get getTimePreference() {
    return this.registerForm.get('timePreference');
  }

  get getTnc() {
    return this.registerForm.get('tnc');
  }

  getStatesByCountry(country){
    console.log(country);
    if(country == "India"){
      //this.statesArr = [
        //{"WB":"WestBengal"}, 
        //{"TN":"Tamilnadu"}
       // ];

        this.statesArr = ["WestBengal","Tamilnadu"];
    } 
    else if(country == "Australia"){
      //this.statesArr = [
       // {"VIC":"Victoria"}, 
       // {"NSW":"New South Wales"}
        //];
        this.statesArr = ["Victoria","New South Wales"];
    }
    else {
      //this.statesArr = [{"default":"Select a country"}];
      this.statesArr = ["Select a country"];
    }
  }

  saveData(){
    console.log("in savedata");
    console.log(this.registerForm.value);
  }
}
