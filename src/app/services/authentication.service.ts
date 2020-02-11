import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../services/http.service";
import { urls } from "../services/url.enum";
import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  user?: User;

  constructor(private http: HttpService) {}

  login(user: string, pass: string): Observable<User> {
    var body = {
      username: user,
      password: pass
    };
    return this.http.post(urls.login, body);
  }
}
