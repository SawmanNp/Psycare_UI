export class Appointment {
  id: number;
  User_id: number;
  advisor_id: number;
  // Date format  "2020-02-16T22:19:53.148+03:30"
  start_datetime: Date;
  end_datetime: Date;
  Cancelled: boolean;
}
