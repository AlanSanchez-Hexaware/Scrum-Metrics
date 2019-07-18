import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

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
    this.http.post<{error: boolean, message: string}>('http://localhost:3000/api/lastproject', name).subscribe((responseData) => {
      return responseData.message;
    });
  }

  setMember(projectname: string, user: number) {

  }
}
