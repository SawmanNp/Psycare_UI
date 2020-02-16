import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { RegisterService } from "../../../services/register.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showMsg = false;

  constructor(
    private fb: FormBuilder,
    private reg: RegisterService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: this.fb.control("", [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("^[A-Za-z0-9 ]+$")
      ]),
      email: this.fb.control("", [Validators.email, Validators.required]),
      password: this.fb.control("", [
        Validators.required,
        Validators.minLength(4)
      ]),
      passrepeat: this.fb.control("", [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  ngOnInit() {}

  makeFalse() {
    this.showMsg = false;
  }

  register() {
    const formValue = this.registerForm.value;
    if (formValue.password === formValue.passrepeat) {
      this.showMsg = false;
      this.reg
        .register(formValue.username, formValue.email, formValue.password)
        .subscribe(res => {
          if (res["status"] == 500) {
            console.log("register succeed!");
            this.router.navigateByUrl("/login");
          }
        });
    } else {
      this.showMsg = true;
    }
  }
}
