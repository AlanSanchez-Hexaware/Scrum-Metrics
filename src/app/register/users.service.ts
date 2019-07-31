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
    this.http.post<{error: boolean, message: string}>('http://192.168.0.108:3000/api/postuser', user).subscribe((responseData) => {
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
    this.http.post<{error: boolean, message: string}>('http://192.168.0.108:3000/api/login', userLog).subscribe((responseData) => {
    if (responseData.error) {
        alert(responseData.message);
        return;
      } else {
        sessionStorage.setItem('token', responseData.message);
        sessionStorage.setItem('username', username);
        this.getUserInfo(username);
      }
    });
  }

  getUserInfo(username: string) {
    const user = { username };
    return this.http.post<{name: string, e_mail: string, user_id: number}>
    ('http://192.168.0.108:3000/api/user', user).subscribe((responseData) => {
      const user1: any[] = JSON.parse(JSON.stringify(responseData));
      user1.forEach((Object: any[]) => {
        // tslint:disable: no-string-literal
        const curname = Object['name'];
        const curemail = Object['e_mail'];
        const curid = Object['user_id'];
        sessionStorage.setItem('name', curname);
        sessionStorage.setItem('email', curemail);
        sessionStorage.setItem('userid', curid);
        this.router.navigate(['/app/project']);
      });
    });
  }

  loggedIn() {
    return !!sessionStorage.getItem('token');
  }

  getUsersM() {
    this.http.get('http://192.168.0.108:3000/api/usersquery').subscribe((responseData) => {
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
    this.http.get('http://192.168.0.108:3000/api/usersquery').subscribe((responseData) => {
      this.users = JSON.parse(JSON.stringify(responseData));
      this.users.forEach((Object: any[]) => {
        const currentuser = Object['username'];
        this.usernames.push(currentuser);
      });
    });
    return this.usernames;
  }

  updateName(username: string, name: string) {
    const userupd = { username, name };
    this.http.put<{error: boolean}>('http://192.168.0.108:3000/api/nameupd', userupd).subscribe((responseData) => {
      if (responseData.error) {
        alert('Error, refresh and try again');
      } else {
        alert('Name changed, reload page');
        sessionStorage.setItem('name', name);
      }
    });
  }

  updateMail(username: string, email: string) {
    const userupd = { username, email };
    this.http.put<{error: boolean}>('http://192.168.0.108:3000/api/mailupd', userupd).subscribe((responseData) => {
      if (responseData.error) {
        alert('Error, refresh and try again');
      } else {
        alert('E-mail changed, reload page');
        sessionStorage.setItem('email', email);
      }
    });
  }

  updateAll(username: string, name: string, email: string) {
    const userupd = { username, name, email };
    this.http.put<{error: boolean}>('http://192.168.0.108:3000/api/allupd', userupd).subscribe((responseData) => {
      if (responseData.error) {
        alert('Error, refresh and try again');
      } else {
        alert('Success, reload page');
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
      }
    });
  }

  getUserName(userid: string) {
    const user = { userid };
    return this.http.post('http://192.168.0.108:3000/api/username', user).toPromise();
  }

}
