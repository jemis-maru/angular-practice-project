import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectStatus = "under development"

  cardArr = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZt0h5A35LHrauX4SLMDBlYbuwBclkGxrMkKf4JxYhyRfNNPi-boQwC3na3IgY4WI3AZo&usqp=CAU",
      title: "Card 1",
      status: true,
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Card 2",
      status: false,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIGpo4JgRABTs959jqoYFEtc3UARBGaT3t7S3JYz2lEz_bWehVjj_k-s4USbT-oy3l3g&usqp=CAU",
      title: "Card 3",
      status: true
    },
  ]

}
