import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { RegisterService } from "../../../services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showMsg:boolean = false;

  constructor(private fb: FormBuilder, private reg: RegisterService) {
    this.registerForm = this.fb.group({
      username: this.fb.control(""),
      email: this.fb.control(""),
      password: this.fb.control(""),
      passrepeat: this.fb.control("")
    });
  }

  ngOnInit() {}

  register() {
    const formValue = this.registerForm.value;
    if (formValue.password === formValue.passrepeat) {
      this.reg.register(
        formValue.username,
        formValue.email,
        formValue.password
      );
      console.log(formValue);
    } else {
      this.showMsg=true;
    }
  }
}
