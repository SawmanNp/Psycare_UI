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

  constructor(private http: HttpService, private router: Router) {
    if (document.cookie.indexOf("jwt") > -1)
      this.http.get("/users").subscribe(res => {
        if (res["status"] == 200) this.user = res["data"];
        router.navigateByUrl("panel");
      });

    var obj = JSON.stringify({
      periods: [
        {
          day_of_week: 4,
          start_time: "2020-02-14T12:04:47+03:30",
          end_time: "2020-02-14T12:34:47+03:30"
        },
        {
          day_of_week: 6,
          start_time: "2020-02-15T12:04:47+03:30",
          end_time: "2020-02-15T12:34:47+03:30"
        }
      ]
    });
    console.log(obj);
  }

  login(user: string, pass: string): Observable<any> {
    try {
      var body = {
        username: user,
        password: pass
      };
      return this.http.post(urls.login, body);
    } catch (error) {
      console.log(error);
    }
  }

  setCookie(cookie: string) {
    document.cookie = "jwt=" + cookie;
    this.http.cookie = cookie;
  }

  setUser(user: User) {
    this.user = user;
  }

  logOut() {
    this.user = null;
    document.cookie = "jwt" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    this.router.navigateByUrl("/login");
  }
}
