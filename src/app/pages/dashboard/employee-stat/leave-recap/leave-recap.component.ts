import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-recap',
  templateUrl: './leave-recap.component.html',
  styleUrls: ['./leave-recap.component.scss']
})
export class LeaveRecapComponent implements OnInit {

  data:any;

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        code: 'LV-PTES-PT-CV10435-01-23-001',
        requestDate:
          'Mon Jan 02 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        type: 'Annual Leave',
        startDate: 'Tue Jan 03 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        endDate: 'Tue Jan 03 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        duration: '1',
        day: 'Full',
        category: 'Emergency Leave',
        status: 'approve',
        reason: 'Family Event',
      },
      {
        code: 'LV-PTES-PT-CV10435-01-23-001',
        requestDate:
          'Mon Jan 09 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        type: 'Compassionate Leave (Imm. Family)',
        startDate: 'Tue Jan 10 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        endDate: 'Tue Jan 11 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        duration: '2',
        day: 'Full',
        category: 'Emergency Leave',
        status: 'approve',
        reason: 'Family Event',
      },
      {
        code: 'LV-PTES-PT-CV10435-01-23-001',
        requestDate:
          'Mon Jan 16 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        type: 'Annual Leave',
        startDate: 'Tue Jan 24 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        endDate: 'Tue Jan 24 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        duration: '0.5',
        day: 'Half',
        category: 'Normal Leave',
        status: 'approve',
        reason: 'Family Event',
      },
      {
        code: 'LV-PTES-PT-CV10435-01-23-001',
        requestDate:
          'Mon Jan 16 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        type: 'Annual Leave',
        startDate: 'Tue Jan 24 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        endDate: 'Tue Jan 24 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        duration: '0.5',
        day: 'Half',
        category: 'Normal Leave',
        status: 'approve',
        reason: 'Family Event',
      },
      {
        code: 'LV-PTES-PT-CV10435-01-23-001',
        requestDate:
          'Mon Jan 30 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        type: 'Sick Leave',
        startDate: 'Mon Jan 30 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        endDate: 'Thu Feb 02 2023 07:00:00 GMT+0700 (Western Indonesia Time)',
        duration: '3',
        day: 'Full',
        category: 'Emergency Leave',
        status: 'approve',
        reason: 'Family Event',
      },
    ];
  }

}
