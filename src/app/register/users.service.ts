import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {}

  setUser(name: string, email: string, username: string, password: string) {
    const user: User = { name, email, username, password };
    this.http.post<{response: JSON}>('http://localhost:3000/api/postuser', user).subscribe((responseData) => {
      console.log(responseData);
      alert(responseData);
    });
  }

  getStatus() {
    this.http.get<{response: string}>('http://localhost:3000/api/postuser').subscribe((responseData) => {
      const obj1 = responseData.response;
      //const obj2 = obj1.parse('text');
      //console.log(obj2);
      //alert(obj2);
    });
  }

}
