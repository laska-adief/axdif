import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-stat',
  templateUrl: './employee-stat.component.html',
  styleUrls: ['./employee-stat.component.scss']
})
export class EmployeeStatComponent implements OnInit {

  dataAttendanceCompleteness:any;
  optionAttendanceCompleteness:any;

  dataOverallTaskProgress:any;
  optionOverallTaskProgress:any;

  constructor() { }

  monthYearButton = 'monthly';
  date = new Date();

  ngOnInit(): void {
    this.dataAttendanceCompleteness = {
      labels: ['Complete', 'Not Complete'],
      datasets: [
          {

              data: [10, 10],
              backgroundColor: ['rgba(7, 150, 229, 1)', 'rgba(229, 57, 53, 1)']
            }
      ],
    };

    this.optionAttendanceCompleteness = {
      plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
      },
    }

    this.dataOverallTaskProgress = {
      labels: ['Complete', 'Overdue', 'Unscheduled'],
      datasets: [
          {

              data: [10, 5, 5],
              backgroundColor: ['rgba(7, 150, 229, 1)', 'rgba(255, 152, 0, 1)', 'rgba(212, 223, 231, 1)']
            }
      ],
    };

    this.optionOverallTaskProgress = {
      plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
      },
    }
  }

  onClickMonthly() {
    this.monthYearButton = 'yearly';
  }

  onClickYeary() {
    this.monthYearButton = 'monthly';
  }

}
