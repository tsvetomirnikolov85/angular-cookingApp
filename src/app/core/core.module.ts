import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, HomeComponent],
})
export class CoreModule {}
