import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Observable } from "rxjs";
import { Appointment } from "../models/Appointment";
import { urls } from "../services/url.enum";

@Injectable({
  providedIn: "root"
})
export class AppointmentsService {
  constructor(private http: HttpService) {}

  getAdvisorAppointments(): Observable<Appointment[]> {
    return this.http.get(urls.advisorAppointments);
  }
  getUserAppointments(): Observable<Appointment[]> {
    return this.http.get(urls.userAppointments);
  }
}
