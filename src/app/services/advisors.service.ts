import { Injectable } from "@angular/core";
import { Advisor } from "../models/Advisor";
import { HttpService } from "../services/http.service";
import { Router } from "@angular/router";
import { urls } from "../services/url.enum";
import { AuthenticationService } from "../services/authentication.service";
import { Observable } from "rxjs";
import { Schedule } from "../models/Schedule";

@Injectable({
  providedIn: "root"
})
export class AdvisorsService {
  constructor(
    private http: HttpService,
    private router: Router,
    private auth: AuthenticationService
  ) {}

  getAdvisors(): Observable<any> {
    return this.http.get(urls.advisors);
  }

  upgrade(
    firstName: string,
    lastName: string,
    desc: string,
    hf: number
  ): Observable<any> {
    try {
      var body = {
        first_name: firstName,
        last_name: lastName,
        description: desc,
        hourly_fee: hf
      };
      return this.http.post(urls.advisors, body);
    } catch (error) {
      console.log(error);
    }
  }

  getAdvisor(id: string): Observable<any> {
    return this.http.get(urls.advisors + "/" + id);
  }
  getSchedule(): Observable<any> {
    return this.http.get(urls.schedule);
  }
  setSchedule(body: Schedule[]): Observable<any> {
    var data = {
      periods: body
    };
    console.log(data);
    return this.http.post(urls.schedule, data);
  }
  deleteSchedule(): Observable<any> {
    return this.http.delete(urls.schedule);
  }
  getAdvisorRating(id: string): Observable<any> {
    return this.http.get("/advisors/" + id + "/rating");
  }
}
