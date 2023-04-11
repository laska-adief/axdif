import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-task-progress',
  templateUrl: './overall-task-progress.component.html',
  styleUrls: ['./overall-task-progress.component.scss']
})
export class OverallTaskProgressComponent implements OnInit {

  data:any;
  option:any;

  constructor() { }

  ngOnInit(): void {
    
    this.data = {
      labels: ['Complete', 'Overdue', 'Unscheduled'],
      datasets: [
          {

              data: [10, 5, 5],
              backgroundColor: ['rgba(7, 150, 229, 1)', 'rgba(255, 152, 0, 1)', 'rgba(212, 223, 231, 1)']
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
