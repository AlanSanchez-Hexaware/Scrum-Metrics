import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

  private users: any[];
  private usernames: any[] = [];
  private usersMap = new Map();

  constructor(private http: HttpClient) {}

  setUser(name: string, email: string, username: string, password: string) {
    const user: User = { name, email, username, password };
    this.http.post<{error: boolean, message: string}>('http://localhost:3000/api/postuser', user).subscribe((responseData) => {
      alert(responseData.message);
      if (responseData.error) {
        return;
      } else {
        setTimeout('location.href = \'/login\';' , 500);
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
        setTimeout('location.href = \'/app\';' , 500);
      }
    });
  }

  getUsersM() {
    this.http.get('http://localhost:3000/api/usersquery').subscribe((responseData) => {
      this.users = JSON.parse(JSON.stringify(responseData));
      this.users.forEach((Object: any[]) => {
        // tslint:disable: no-string-literal
        const currentuser = Object['username'];
        const currentid = Object['user_id'];
        this.usersMap.set(currentid, currentuser);
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
