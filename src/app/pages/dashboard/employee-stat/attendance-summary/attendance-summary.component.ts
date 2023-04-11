import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-summary',
  templateUrl: './attendance-summary.component.html',
  styleUrls: ['./attendance-summary.component.scss']
})
export class AttendanceSummaryComponent implements OnInit {

  data!:any;

  basicOptions = {
    plugins: {
        legend: {
          display: false,
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#809FB8'
            },
        },
        y: {
            ticks: {
                color: '#809FB8'
            },
        }
    },
};

  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
          {

              data: [1, 3, 1, 2, 1, 1, 8, 2, 1, 3, 1, 1],
              backgroundColor: 'rgba(229, 57, 53, 1)'
            },
            {
              
              data: [25, 20, 27, 23, 19, 20, 8, 23, 24, 20, 26, 20],
              backgroundColor: 'rgba(7, 150, 229, 1)'
          }
      ],
    };
  }

}
