import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setCurrentMenu(this.router.url);
    this.router.events.subscribe({
      next: (res) => {
        if(res instanceof NavigationEnd) {
          this.setCurrentMenu(res.url);
        }
      }
    })
  }

  setCurrentMenu(url:string) {
    switch (url) {
      case '/dashboard/overview':
        this.currentMenu = 'Overview';
        break;
      case '/dashboard/employee-stat':
        this.currentMenu = 'Employee Stats';
        break;
        
      default:
        this.currentMenu = 'Overview';
        break;
    }
  }

}
