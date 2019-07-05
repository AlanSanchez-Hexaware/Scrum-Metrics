import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { createReducer, on } from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class UserService {

  public userObs$: Observable<any> = null;
  public errObs$: Observable<any[]> = null;

  constructor(private http: HttpClient) {}

  setUser(name: string, email: string, username: string, password: string) {
    const user: User = { name, email, username, password };
    this.http.post<{error: boolean, message: string}>('http://localhost:3000/api/postuser', user).subscribe((responseData) => {
      alert(responseData.message);
      if (responseData.error) {
        return;
      } else {
        setTimeout('location.href = \'/login\';' , 1000);
      }
    });
  }

  loginUser(username: string, password: string) {
    const userLog = { username, password };
    this.http.post<{error: boolean, message: string}>('http://localhost:3000/api/login', userLog).subscribe((responseData) => {
    alert(responseData.message);
    if (responseData.error) {
        return;
      } else {
        setTimeout('location.href = \'/app\';' , 1000);
      }
    });
  }

}
