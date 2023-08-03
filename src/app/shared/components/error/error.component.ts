import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../services/error.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  error!: Observable<string>;
  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.error = this.errorService.error$;

    setInterval(() => {
      this.errorService.err$$.next('');
    }, 6000);
  }
}
