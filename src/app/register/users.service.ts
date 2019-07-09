import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

  private users: any[];
  private usernames: any[] = [];

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

  getUsers() {
    this.http.get('http://localhost:3000/api/usersquery').subscribe((responseData) => {
      this.users = JSON.parse(JSON.stringify(responseData));
      this.users.forEach((Object: any[]) => {
        // this.usernames.push([Object['user_id'] , Object['username']]);
        // tslint:disable-next-line: no-string-literal
        this.usernames.push([Object['username']]);
      });
    });
    return this.usernames;
  }

}
