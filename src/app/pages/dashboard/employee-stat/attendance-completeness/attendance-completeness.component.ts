import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-completeness',
  templateUrl: './attendance-completeness.component.html',
  styleUrls: ['./attendance-completeness.component.scss']
})
export class AttendanceCompletenessComponent implements OnInit {

  data:any;
  option:any;

  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['Complete', 'Not Complete'],
      datasets: [
          {

              data: [10, 10],
              backgroundColor: ['rgba(7, 150, 229, 1)', 'rgba(229, 57, 53, 1)']
            }
      ],
    };

    this.option = {
      plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
      },
    }
  }

}
