import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../services/http.service";
import { urls } from "../services/url.enum";
import { User } from "../models/User";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  user?: User;

  constructor(private http: HttpService, private router: Router) {}

  login(user: string, pass: string): void {
    try {
      var body = {
        username: user,
        password: pass
      };
      this.http.post(urls.login, body).subscribe(res => (this.user = res));
      this.router.navigateByUrl("");
    } catch (error) {
      console.log(error);
    }
  }
}
