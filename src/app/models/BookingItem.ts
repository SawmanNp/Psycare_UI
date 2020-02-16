import { Schedule } from "./Schedule";
import { Appointment } from "./Appointment";

export class BookingItem {
  day: Date;
  schedules: Schedule[];
  appointments: Appointment[];

  constructor(date: Date, schd: Schedule[], apts: Appointment[]) {
    this.day = date;
    this.schedules = schd;
    this.appointments = apts;
  }
}
