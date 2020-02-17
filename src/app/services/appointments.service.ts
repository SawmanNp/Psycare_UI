import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Observable } from "rxjs";
import { Appointment } from "../models/Appointment";
import { urls } from "../services/url.enum";
import { Schedule } from "../models/Schedule";

@Injectable({
  providedIn: "root"
})
export class AppointmentsService {
  constructor(private http: HttpService) {}
  getAdvisorSchedule(id: string): Observable<any> {
    return this.http.get(urls.schedule + "/" + id);
  }
  getAdvisorAppointmentsById(id: string): Observable<any> {
    return this.http.get(urls.advisorAppointments + "/" + id);
  }
  getAdvisorAppointments(): Observable<any> {
    return this.http.get(urls.advisorAppointments);
  }
  getUserAppointments(): Observable<any> {
    return this.http.get(urls.userAppointments);
  }
  setAppointment(id: number, start: Date, end: Date): Observable<any> {
    var data = {
      advisor_id: id,
      start_datetime: start,
      end_datetime: end
    };
    return this.http.post(urls.appointments, data);
  }
  cancelAppointment(id: number): Observable<any> {
    return this.http.delete("appointments/" + id);
  }
  rateAppointment(id: number, rate: number): Observable<any> {
    var data = {
      appointment_id: id,
      score: rate
    };
    return this.http.post("appointments/rate", data);
  }
}
