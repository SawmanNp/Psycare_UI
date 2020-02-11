import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthenticationService } from "../../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthenticationService) {
    this.loginForm = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    });
  }

  ngOnInit() {}

  attemptLogin() {
    const formValue = this.loginForm.value;
    this.auth.login(formValue.username, formValue.password);
  }
}
