import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectids: any[];
  private currproj: number;
  private host = 'https://scrum-metrics.herokuapp.com';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: variable-name
  setProject(name: string, description: string, start_date: any, end_date: any, image: any) {
    const project: Project = { name, description, start_date, end_date, image };
    return this.http.post( this.host + '/api/postproject', project ).toPromise();
  }

  getProject(name: string) {
    const projname = { name };
    return this.http.post( this.host + '/api/lastproject', projname).toPromise();
  }

  setMember(projid: string, user: number, role: string) {
    const member = { projid, user, role };
    return this.http.post( this.host + '/api/postmember', member).toPromise();
  }

  getUserProjects(userid: string) {
    const usid = { userid };
    return this.http.post( this.host + '/api/userprojs', usid).toPromise();
  }

  getProjectInfo(projectid: string) {
    const proj = { projectid };
    return this.http.post( this.host + '/api/projectinfo', proj).toPromise();
  }

  setNewProjImg(projid: string, newimage: string) {
    const proj = { projid, newimage };
    return this.http.put(this.host + '/api/setnewprojimg', proj).toPromise();
  }

  getProjImg(projid: string) {
    const proj = { projid };
    return this.http.post(this.host + '/api/getprojectimage', proj).toPromise();
  }

  getMembers(projid: string) {
    const project = { projid };
    return this.http.post( this.host + '/api/projmembers', project).toPromise();
  }

  setNewDesc(projid: string, description: string) {
    const project = { projid, description };
    return this.http.put( this.host + '/api/setnewdesc', project).toPromise();
  }

  deleteMember(userid: string, projid: string) {
    const user = { userid, projid };
    return this.http.post( this.host + '/api/deletemember', user).toPromise();
  }

  updRole(projid: string, userid: string, role: string) {
    const member = { projid, userid, role };
    return this.http.put( this.host + '/api/updmemrole', member).toPromise();
  }

  getSprints(projid: string) {
    const proj = { projid };
    return this.http.post( this.host + '/api/getsprints', proj).toPromise();
  }

  newSprint(name: string, projid: string) {
    const sprint = { name, projid };
    return this.http.post( this.host + '/api/setsprint', sprint).toPromise();
  }

  getCurSprint(projid: string, name: string) {
    const cursprint = { projid, name };
    return this.http.post( this.host + '/api/currsprint', cursprint).toPromise();
  }

  getStories(projid: string, sprintid: string) {
    const story = { projid, sprintid };
    return this.http.post( this.host + '/api/getstories', story).toPromise();
  }

  setStory(description: string, sprintid: string, projid: string) {
    const story = { description, sprintid, projid };
    return this.http.post( this.host + '/api/poststory', story).toPromise();
  }

  updStoryCol(colid: string, storyname: string, sprintid: string, projid: string) {
    const story = { colid, storyname, sprintid, projid };
    return this.http.put( this.host + '/api/updstorycol', story).toPromise();
  }

  checkSprint(sprintid: string, projid: string) {
    const sprint = { sprintid, projid };
    return this.http.post( this.host + '/api/sprintstatus', sprint).toPromise();
  }

  endSprint(sprintid: string, projid: string) {
    const sprint = { sprintid, projid };
    return this.http.put(this.host + '/api/endsprint', sprint).toPromise();
  }

  moveStory(sprintid: string, projid: string, storyid: string) {
    const story = { sprintid, projid, storyid };
    return this.http.put(this.host + '/api/movestory', story).toPromise();
  }

  getUnfinishedStories(sprintid: string, projid: string) {
    const story = { sprintid, projid };
    return this.http.post(this.host + '/api/unfinishedstories', story).toPromise();
  }

  getNextSprint(projid: string) {
    const sprint = { projid };
    return this.http.post(this.host + '/api/getnextsprint', sprint).toPromise();
  }

  editStory(sprintid: string, projid: string, oldstory: string, newstory: string) {
    const story = { sprintid, projid, oldstory, newstory };
    return this.http.put(this.host + '/api/editstory', story).toPromise();
  }
}
