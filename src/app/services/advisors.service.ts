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
        id: 1,
        firstName: "mamood",
        lastName: "karimi",
        description: "very nice advisor",
        picUrl: "https://freesvg.org/img/cliente.png"
      },
      {
        id: 2,
        firstName: "سامان",
        lastName: "نهاوندی",
        description: "دسکریپشن",
        picUrl: "https://freesvg.org/img/cliente.png"
      }
    ];
  }
}
