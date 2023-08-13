import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUSer(id: string) {
    return this.http.get<User>(`http://localhost:8080/users/profile/${id}`);
  }
}
