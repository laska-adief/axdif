import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-register',
  templateUrl: './after-register.component.html',
  styleUrls: ['./after-register.component.scss']
})
export class AfterRegisterComponent implements OnInit {

  carousel: { image: string; title: string; subtitle: string }[] = [
    {
      image: 'carousel-Illustration-1.svg',
      title: 'Manage Task Easily & Efficiently',
      subtitle:
        'Increase employee productivity and performance in a measurable and precision system in one application.',
    },
    {
      image: 'carousel-Illustration-2.svg',
      title: 'Communication Is Key',
      subtitle:
        'Connect with your coworkers anywhere like you are in one workspace. Very simple and fast.',
    },
    {
      image: 'carousel-Illustration-3.svg',
      title: 'Employee Self-Service',
      subtitle:
        'Simplify the administrative affairs of the company where you work wherever and whenever. Let’s get started with all these conveniences',
    },
  ];
  
  contentCard:{ image: string; title: string; subtitle: string }[] = [
    {
      image: 'login-img-1.svg',
      title: 'Verify your account',
      subtitle:
        'A verification link has been sent to your email account.',
    },
    {
      image: 'login-img-2.svg',
      title: 'Setup your data',
      subtitle:
        'Input your employee data and get the ease of managing employees',
    },
    {
      image: 'login-img-3.svg',
      title: 'Login to your account',
      subtitle:
        'Login your WMS account',
    },
    
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['/login'])
  }

}
