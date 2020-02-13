import { Injectable } from "@angular/core";
import { Advisor } from "../models/Advisor";
import { HttpService } from "../services/http.service";
import { Router } from "@angular/router";
import { urls } from "../services/url.enum";
import { AuthenticationService } from "../services/authentication.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdvisorsService {
  constructor(
    private http: HttpService,
    private router: Router,
    private auth: AuthenticationService
  ) {}

  getAdvisors(): Advisor[] {
    return [
      {
        id: 1,
        first_name: "mamood",
        last_name: "karimi",
        description: "very nice advisor",
        picUrl: "https://freesvg.org/img/cliente.png"
      },
      {
        id: 2,
        first_name: "سامان",
        last_name: "نهاوندی",
        description: "دسکریپشن",
        picUrl: "https://freesvg.org/img/cliente.png"
      }
    ];
  }
  // getAdvisors():Observable<Advisor[]>{
  //   return this.http.get(urls.advisors);
  // }

  upgrade(firstName: string, lastName: string, desc: string) {
    try {
      var body = {
        first_name: firstName,
        last_name: lastName,
        description: desc
      };
      //this.http.post(urls.advisors, body).subscribe();
      // delete the next line in the end
      this.auth.user.roles.push("advisor");

      this.router.navigateByUrl("/panel");
    } catch (error) {
      console.log(error);
    }
  }

  getAdvisor(id: string): Observable<Advisor> {
    return this.http.get(urls.advisors + "/" + id);
  }
}
