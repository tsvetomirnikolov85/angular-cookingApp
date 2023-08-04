import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [ErrorComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [ErrorComponent, NotFoundComponent],
})
export class SharedModule {}
