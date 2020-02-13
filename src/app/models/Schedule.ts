export class Schedule {
  day_of_week: number;
  start_time: Date;
  end_time: Date;

  constructor(time1: string, time2: string, day: number) {
    time1 = "2020-02-14T" + time1 + ":00+03:30";
    time2 = "2020-02-14T" + time2 + ":00+03:30";
    this.day_of_week = day;
    this.start_time = new Date(time1);
    this.end_time = new Date(time2);
  }
}
