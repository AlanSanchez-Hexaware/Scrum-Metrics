import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class UserService {

  private users: any[];
  private usernames: any[] = [];
  private usersMap = new Map();
  private host = 'https://scrum-metrics.herokuapp.com';

  constructor(private http: HttpClient,
              private router: Router) {}

  setUser(name: string, email: string, username: string, password: string) {
    const user: User = { name, email, username, password };
    this.http.post<{error: boolean, message: string}>(this.host + '/api/postuser', user).subscribe((responseData) => {
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
    this.http.post<{error: boolean, message: string}>(this.host + '/api/login', userLog).subscribe((responseData) => {
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
    (this.host + '/api/user', user).subscribe((responseData) => {
      const user1: any[] = JSON.parse(JSON.stringify(responseData));
      user1.forEach((Object: any[]) => {
        // tslint:disable: no-string-literal
        const curname = Object['name'];
        const curemail = Object['e_mail'];
        const curid = Object['user_id'];
        const curimg = Object['image'];
        sessionStorage.setItem('name', curname);
        sessionStorage.setItem('email', curemail);
        sessionStorage.setItem('userid', curid);
        sessionStorage.setItem('image', curimg);
        this.router.navigate(['/app/project']);
      });
    });
  }

  getUserImg(username: string) {
    const user = { username };
    return this.http.post(this.host + '/api/getprofileimage', user).toPromise();
  }

  loggedIn() {
    return !!sessionStorage.getItem('token');
  }

  getUsersM() {
    this.http.get(this.host + '/api/usersquery').subscribe((responseData) => {
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
    this.http.get(this.host + '/api/usersquery').subscribe((responseData) => {
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
    this.http.put<{error: boolean}>(this.host + '/api/nameupd', userupd).subscribe((responseData) => {
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
    this.http.put<{error: boolean}>(this.host + '/api/mailupd', userupd).subscribe((responseData) => {
      if (responseData.error) {
        alert('Error, refresh and try again');
      } else {
        alert('E-mail changed, reload page');
        sessionStorage.setItem('email', email);
      }
    });
  }

  updatePass(username: string, newpass: string) {
    const passupd = { username, newpass };
    this.http.put<{error: boolean}>(this.host + '/api/passupd', passupd).subscribe((responseData) => {
      if (responseData.error) {
        alert('Error, refresh and try again');
      } else {
        alert('Password updated succesfully');
      }
    });
  }

  updateImage(username: string, newimage: string) {
    const imgupd = { username, newimage };
    return this.http.put(this.host + '/api/picupd', imgupd).toPromise();
  }

  updateAll(username: string, name: string, email: string) {
    const userupd = { username, name, email };
    this.http.put<{error: boolean, message: string}>(this.host + '/api/allupd', userupd).subscribe((responseData) => {
      if (responseData.error) {
        alert(responseData.message);
      } else {
        alert('Success, reload page');
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
      }
    });
  }

  deleteAccount(userid: string, password: string) {
    const deluser = { userid, password };
    this.http.post<{error: boolean, message: string}>(this.host + '/api/deluser', deluser).subscribe((responseData) => {
      if (responseData.error) {
        alert(responseData.message);
      } else {
        alert(responseData.message);
        sessionStorage.clear();
        window.location.reload();
      }
    });
  }

  getUserName(userid: string) {
    const user = { userid };
    return this.http.post(this.host + '/api/username', user).toPromise();
  }

}
