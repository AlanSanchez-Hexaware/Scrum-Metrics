import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectids: any[];
  private currproj: number;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: variable-name
  setProject(name: string, description: string, start_date: any, end_date: any, image: any) {
    const project: Project = { name, description, start_date, end_date, image };
    let nameerror = false;
    this.http.post<{error: boolean, message: string}>('https://scrum-metrics.herokuapp.com/api/postproject', project).subscribe((responseData) => {
      alert(responseData.message);
      if (responseData.error) {
        nameerror = true;
      }
    });
    return nameerror;
  }

  getProject(name: string) {
    const projname = { name };
    return this.http.post('https://scrum-metrics.herokuapp.com/api/lastproject', projname).toPromise();
  }

  setMember(projid: number, user: number, role: string) {
    const member = { projid, user, role };
    return this.http.post('https://scrum-metrics.herokuapp.com/api/postmember', member).toPromise();
  }

  getUserProjects(userid: string) {
    const usid = { userid };
    return this.http.post('https://scrum-metrics.herokuapp.com/api/userprojs', usid).toPromise();
  }

  getProjectInfo(projectid: string) {
    const proj = { projectid };
    return this.http.post('https://scrum-metrics.herokuapp.com/api/projectinfo', proj).toPromise();
  }
}
