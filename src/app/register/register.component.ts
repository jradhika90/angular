import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl,FormBuilder, Validators } from "@angular/forms";
 
@Component({
  selector: "register-form",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
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
    password: [''],
    confirmpassword: [''],

    address: this.fb.group({
      state: [''],
      country: [''],
      postcode: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]{6}')])],
     }),
     tnc:['', Validators.requiredTrue]
  })
}

  ngOnInit() {
    this.registerForm.patchValue({
      name: "Ra",
      email: "test@abc",
      password: "test",
      confirmpassword:"testing",

      address: {
        state: "VIC",
        country: "Australia",
        postcode: "1234a"
      },
      tnc: false
    });
  }

  
  get getName() {
    return this.registerForm.get('name');
  }

  get getEmail() {
    return this.registerForm.get('email');
  }

  get getState() {
    return this.registerForm.get('state');
  }

  get getCountry() {
    return this.registerForm.get('country');
  }

  get getPostcode() {
    return this.registerForm.get('address.postcode');
  }

   get getTnc() {
    return this.registerForm.get('tnc');
  }
}
