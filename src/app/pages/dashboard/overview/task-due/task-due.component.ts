import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-due',
  templateUrl: './task-due.component.html',
  styleUrls: ['./task-due.component.scss']
})
export class TaskDueComponent implements OnInit {

  tasks:any = [
    {
      label: 'UI/UX Designer',
      description: '[WMS][Web][Task] Create Goals design'
    },
    {
      label: 'UI/UX Designer',
      description: '[WMS][Chat] Improve design'
    },
    {
      label: 'UI/UX Designer',
      description: '[WMS][Chat] Improve design'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
