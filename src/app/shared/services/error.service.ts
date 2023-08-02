import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  err$$ = new BehaviorSubject<string>('');
  error$ = this.err$$.asObservable();
}
