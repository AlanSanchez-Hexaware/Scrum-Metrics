import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { async } from 'q';

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
        setTimeout('location.href = \'/home\';' , 1000);
      }
    });
  }

  loginUser2(username: string, password: string) {
    const userLog = { username, password };
    this.userObs$ = this.http.post<{error: boolean, message: string}>('http://localhost:3000/api/login', userLog);
    // this.errObs$ = this.userObs$.pipe().map(this.transformData));
    // console.log(this.errObs$);
    // this.getResp();
  }

  private transformData(responseData) {
    const ress = responseData.response;
    return Object.keys(ress).map(key => ({
      error: ress.error,
      message: ress.message
    }));
  }

  getResp() {
    this.http.get<{error: boolean, message: string}>('http://localhost:3000/api').subscribe((responseData) => {
      console.log(responseData);
      alert(responseData.message);
      if (responseData.error) {
        return;
      } else {
        setTimeout('location.href = \'/home\';' , 1000);
      }
    });
  }

}
