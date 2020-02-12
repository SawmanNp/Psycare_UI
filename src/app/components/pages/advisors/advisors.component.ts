import { Component, OnInit } from '@angular/core';
import { Advisor } from 'src/app/models/Advisor';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.css']
})
export class AdvisorsComponent implements OnInit {
  advisors: Advisor[] = [{
    username: 'forevermamood',
    firstName: 'mamood',
    lastName: 'karimi',
    description: 'very nice advisor',
    credit: 1,
    picUrl: 'https://freesvg.org/img/cliente.png'
  },
  {
    username: 'forevermamood',
    firstName: 'سامان',
    lastName: 'نهاوندی',
    description: 'دسکریپشن',
    credit: 1,
    picUrl: 'https://freesvg.org/img/cliente.png'
  }]

  constructor() { }

  ngOnInit() {
  }

}
