import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl,FormBuilder, Validators } from "@angular/forms";
 
@Component({
  selector: "register-form",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
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
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: [''],
    password: [''],
    confirmpassword: [''],

    address: this.fb.group({
      state: [''],
      country: [''],
      postcode: ['']
     })
  })
}

  ngOnInit() {
    this.registerForm.patchValue({
      name: "Radhika",
      email: "test@abc.com",
      password: "test",
      confirmpassword:"testing",

      address: {
        state: "VIC",
        country: "Australia",
        postcode: "1234"
      }
    });
  }
}
