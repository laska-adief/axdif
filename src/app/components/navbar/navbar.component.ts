import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  items: MenuItem[] = [
    {label:'Overview', routerLink:['/dashboard/overview']},
    {label:'Employee Stats', routerLink:['/dashboard/employee-stat']},
    {label:'Submission'},
    {label:'Task'},
    {label:'Chat'},
    {label:'Payroll'},
  ];
  currentMenu:string = 'Overview'

  constructor() { }

  ngOnInit(): void {
  }

}
