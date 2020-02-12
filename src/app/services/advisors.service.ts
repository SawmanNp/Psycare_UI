import { Injectable } from "@angular/core";
import { Advisor } from "../models/Advisor";

@Injectable({
  providedIn: "root"
})
export class AdvisorsService {
  constructor() {}

  getAdvisors(): Advisor[] {
    return [
      {
        username: "forevermamood",
        firstName: "mamood",
        lastName: "karimi",
        description: "very nice advisor",
        credit: 1,
        picUrl: "https://freesvg.org/img/cliente.png"
      },
      {
        username: "forevermamood",
        firstName: "سامان",
        lastName: "نهاوندی",
        description: "دسکریپشن",
        credit: 1,
        picUrl: "https://freesvg.org/img/cliente.png"
      }
    ];
  }
}
