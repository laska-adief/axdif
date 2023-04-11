import { NgModule } from '@angular/core';

import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

const primeNgModules = [
  PasswordModule,
  CheckboxModule,
  InputTextModule,
  ButtonModule,
  CarouselModule,
  MenubarModule,
  MenuModule,
  CardModule,
  DividerModule,
  BadgeModule,
  ChartModule,
  TableModule
];


@NgModule({
  declarations: [],
  imports: [],
  exports: [primeNgModules]
})
export class PrimengModule { }
