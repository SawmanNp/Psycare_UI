import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthenticationService } from "../../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error='';
  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: this.fb.control("" , [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 ]+$")
      ]),
      password: this.fb.control("" , [
        Validators.required
      ])
    });
  }

  ngOnInit() {}

  attemptLogin() {
    const formValue = this.loginForm.value;
    this.auth.login(formValue.username, formValue.password).subscribe(res => {
      if (res["status"] == 200) {
        this.auth.setUser(res["data"]["user"]);
        this.auth.setCookie(res["data"]["cookie"]);
        console.log(res);
        console.log(this.auth.user);
        this.router.navigateByUrl("/panel");
      }
    },
    error=>{
      if (error.error.status===403) {
        this.error='نام کاربری یا رمز عبور اشتباه است';
      }
    }
    
    );
  }
}
