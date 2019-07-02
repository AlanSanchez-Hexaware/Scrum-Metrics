import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class UserService{
  constructor(private http: HttpClient) {}
  setUser(name: string, email: string, username: string, password: string){
    const user: User = { id: null, name: null, email: null, username: null, password: null };
    this.http.post<{message: string}>("http://localhost:3000/api/postuser",user).subscribe((responseData) => {
      console.log(responseData.message);
    });
  }
}
