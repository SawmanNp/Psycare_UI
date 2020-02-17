import {
  Component,
  OnInit,
  Input,
  Inject,
  Output,
  EventEmitter
} from "@angular/core";
import { Appointment } from "src/app/models/Appointment";
import { AppointmentsService } from "../../services/appointments.service";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-appointment-item",
  templateUrl: "./appointment-item.component.html",
  styleUrls: ["./appointment-item.component.css"]
})
export class AppointmentItemComponent implements OnInit {
  @Input() viewer: string;
  @Input() appointment: Appointment;
  @Output() onCancel = new EventEmitter<number>();
  userViewer = false;
  isPast = false;
  isCanceled = false;
  rating: number;
  ratingDisabled = false;

  day = "";

  constructor(
    private aps: AppointmentsService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const today = new Date();
    if (this.appointment.end_datetime <= today) {
      this.isPast = true;
    }
    if (this.viewer == "user") {
      this.userViewer = true;
    }
    this.isCanceled = this.appointment.Cancelled;
    this.day = this.persianDay(
      new Date(this.appointment.start_datetime).getDay()
    );
  }

  localDate(): string {
    return new Date(this.appointment.start_datetime).toLocaleDateString(
      "fa-IR"
    );
  }

  getAsDate(d: Date): Date {
    return new Date(d);
  }

  cancel(): void {
    // send the request
    //this.aps.cancel(this.appointment.ID)
    this.onCancel.emit(this.appointment.ID);
    this.appointment.Cancelled = true;
    this.isCanceled = true;
  }
  rate(): void {
    // send the request
    // this.aps.rate(this.appointment.ID, leRate);
  }

  viewAdvisor() {
    this.router.navigateByUrl("advisor/view/" + this.appointment.advisor_id);
  }

  persianDay(num: number): string {
    let d = "";
    switch (num) {
      case 0:
        d = "یکشنبه";
        break;
      case 1:
        d = "دوشنبه";
        break;
      case 2:
        d = "سه شنبه";
        break;
      case 3:
        d = "چهارشنبه";
        break;
      case 4:
        d = "پنج شنبه";
        break;
      case 5:
        d = "جمعه";
        break;
      case 6:
        d = "شنبه";
        break;
    }
    return d;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "350px",
      height: "250px",
      data: { rating: this.rating, ratingDisabled: this.ratingDisabled }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        this.rating = result * 2;
        this.ratingDisabled = true;
        this.rate();
      }
    });
  }
}

export interface DialogData {
  rating: number;
  ratingDisabled: string;
}

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "./dialog-overview-example-dialog.html",
  styleUrls: ["./dialog-overview-example-dialog.css"]
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
