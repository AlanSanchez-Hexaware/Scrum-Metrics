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
    this.http.post<{error: boolean, message: string}>('http://192.168.0.108:3000/api/postproject', project).subscribe((responseData) => {
      alert(responseData.message);
      if (responseData.error) {
        nameerror = true;
      }
    });
    return nameerror;
  }

  getProject(name: string) {
    const projname = { name };
    return this.http.post('http://192.168.0.108:3000/api/lastproject', projname).toPromise();
  }

  setMember(projid: string, user: number, role: string) {
    const member = { projid, user, role };
    return this.http.post('http://192.168.0.108:3000/api/postmember', member).toPromise();
  }

  getUserProjects(userid: string) {
    const usid = { userid };
    return this.http.post('http://192.168.0.108:3000/api/userprojs', usid).toPromise();
  }

  getProjectInfo(projectid: string) {
    const proj = { projectid };
    return this.http.post('http://192.168.0.108:3000/api/projectinfo', proj).toPromise();
  }

  getMembers(projid: string) {
    const project = { projid };
    return this.http.post('http://192.168.0.108:3000/api/projmembers', project).toPromise();
  }

  setNewDesc(projid: string, description: string) {
    const project = { projid, description };
    return this.http.put('http://192.168.0.108:3000/api/setnewdesc', project).toPromise();
  }

  deleteMember(userid: string, projid: string) {
    const user = { userid, projid };
    return this.http.post('http://192.168.0.108:3000/api/deletemember', user).toPromise();
  }

  updRole(projid: string, userid: string, role: string) {
    const member = { projid, userid, role };
    return this.http.post('http://192.168.0.108:3000/api/updmemrole', member).toPromise();
  }

  getSprints(projid: string) {
    const proj = { projid };
    return this.http.post('http://192.168.0.108:3000/api/getsprints', proj).toPromise();
  }

  newSprint(name: string, projid: string) {
    const sprint = { name, projid };
    return this.http.post('http://192.168.0.108:3000/api/setsprint', sprint).toPromise();
  }

  getCurSprint(projid: string, name: string) {
    const cursprint = { projid, name };
    return this.http.post('http://192.168.0.108:3000/api/currsprint', cursprint).toPromise();
  }

  getStories(projid: string, sprintid: string) {
    const story = { projid, sprintid };
    return this.http.post('http://192.168.0.108:3000/api/getstories', story).toPromise();
  }

  setStory(description: string, sprintid: string, projid: string) {
    const story = { description, sprintid, projid };
    return this.http.post('http://192.168.0.108:3000/api/poststory', story).toPromise();
  }
}
