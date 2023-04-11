import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-completion',
  templateUrl: './task-completion.component.html',
  styleUrls: ['./task-completion.component.scss']
})
export class TaskCompletionComponent implements OnInit {

  data:any;
  options:any;

  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
          {
            label: 'Complete',
            data: [50, 120, 80, 120, 180, 60, 50, 100, 140, 90, 180, 140],
            borderColor: 'rgba(7, 150, 229, 1)',
            pointBackgroundColor: 'rgba(225, 244, 254, 1)',
            pointBorderColor: 'rgba(8, 83, 154, 1)',
            backgroundColor: 'rgba(8, 83, 154, 0.2)',
            radius: 2,
            tension: .4
          },
          {
            label:'Created Task',
            data: [40, 50, 100, 70, 130, 100, 150, 60, 100, 140, 50, 100],
            borderColor: 'rgba(255, 152, 0, 1)',
            pointBackgroundColor: 'rgba(255, 236, 208, 1)',
            pointBorderColor: 'rgba(255, 152, 0, 1)',
            pbackgroundolor: 'rgba(255, 152, 0, 0.2)',
            radius: 2,
            tension: .4
          }
      ],
    };

    this.options = {
      plugins: {
          legend: {
            display: true,
            position: 'top'
          }
      },
    }
  }

}
