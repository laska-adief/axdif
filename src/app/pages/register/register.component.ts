import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onRegister() {
    this.router.navigate(['verify-account']);
  }
}
