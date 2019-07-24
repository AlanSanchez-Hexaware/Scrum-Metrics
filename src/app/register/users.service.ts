import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class UserService {

  private users: any[];
  private usernames: any[] = [];
  private usersMap = new Map();

  constructor(private http: HttpClient,
              private router: Router) {}

  setUser(name: string, email: string, username: string, password: string) {
    const user: User = { name, email, username, password };
    this.http.post<{error: boolean, message: string}>('http://localhost:3000/api/postuser', user).subscribe((responseData) => {
      alert(responseData.message);
      if (responseData.error) {
        return;
      } else {
        this.router.navigate(['/start/login']);
      }
    });
  }

  loginUser(username: string, password: string) {
    const userLog = { username, password };
    this.http.post<{error: boolean, message: string}>('http://localhost:3000/api/login', userLog).subscribe((responseData) => {
    if (responseData.error) {
        alert(responseData.message);
        return;
      } else {
        localStorage.setItem('token', responseData.message);
        this.router.navigate(['/app/project']);
      }
    });
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getUsersM() {
    this.http.get('http://localhost:3000/api/usersquery').subscribe((responseData) => {
      this.users = JSON.parse(JSON.stringify(responseData));
      this.users.forEach((Object: any[]) => {
        // tslint:disable: no-string-literal
        const currentuser = Object['username'];
        const currentid = Object['user_id'];
        this.usersMap.set(currentuser, currentid);
      });
    });
    return this.usersMap;
  }

  getUsersA() {
    this.http.get('http://localhost:3000/api/usersquery').subscribe((responseData) => {
      this.users = JSON.parse(JSON.stringify(responseData));
      this.users.forEach((Object: any[]) => {
        const currentuser = Object['username'];
        this.usernames.push(currentuser);
      });
    });
    return this.usernames;
  }

}
