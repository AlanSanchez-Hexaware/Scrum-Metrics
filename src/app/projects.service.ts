import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: variable-name
  setProject(name: string, description: string, start_date: Date, end_date: Date, image: File, storedusers: string[]) {
    const project: Project = { name, description, start_date, end_date, image, storedusers };
    this.http.post<{error: boolean, message: string}>('http://localhost:3000/api/postproject', project).subscribe((responseData) => {
      alert(responseData.message);
      if (responseData.error) {
        return;
      } else {
        alert('Success');
      }
    });
  }
}