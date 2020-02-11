import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  user?: User;
  usersUrl: string = "api/v1/users/auth";

  constructor(private http: HttpClient) {}

  login(user: string, pass: string): void {
    var body = {
      username: user,
      password: pass
    };
    this.http.post<User>(this.usersUrl, JSON.stringify(body)).subscribe(res => {
      this.user = res;
      //TODO : login:Observable<User>
      console.log(res);
    });
  }
}
