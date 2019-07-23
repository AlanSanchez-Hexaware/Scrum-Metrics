import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectids: any[];
  private currproj: number = 0;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: variable-name
  setProject(name: string, description: string, start_date: any, end_date: any, image: any) {
    const project: Project = { name, description, start_date, end_date, image };
    let nameerror = false;
    this.http.post<{error: boolean, message: string}>('http://localhost:3000/api/postproject', project).subscribe((responseData) => {
      alert(responseData.message);
      if (responseData.error) {
        nameerror = true;
        console.log(nameerror + 'dentro');
      }
    });
    console.log(nameerror);
    return nameerror;
  }

  getProject(name: string) {
    const projname = { name };
    this.http.post('http://localhost:3000/api/lastproject', projname).subscribe((responseData) => {
      this.projectids = JSON.parse(JSON.stringify(responseData));
      this.projectids.forEach((Object: any) => {
        this.currproj = Object.project_id;
        console.log('curr proj ' + this.currproj);
      });
    });
    console.log('return ' + this.currproj);
    return this.currproj;
  }

  getProject1(name: string) {
    const projname = { name };
    this.http.post('http://localhost:3000/api/lastproject', projname).toPromise().then(result => {
      this.projectids = JSON.parse(JSON.stringify(result));
      this.projectids.forEach((Object: any) => {
        this.currproj = Object.project_id;
        console.log(this.currproj);
      });
    });
    return this.currproj;
  }

  getProject2(name: string) {
    const projname = { name };
    return this.http.post('http://localhost:3000/api/lastproject', projname).toPromise();
  }

  setMember(projid: number, user: number, role: string) {
    const member = { projid, user, role };
    this.http.post<{error: boolean, message: string}>('http://localhost:3000/api/postmember', member).subscribe((responseData) => {
      alert(responseData.message);
      if (responseData.error) {
        return;
      }
    });
  }
}
