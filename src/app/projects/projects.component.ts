import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  useridd = sessionStorage.getItem('userid');
  userprojids = [];
  userprojs = [];

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getUserProjects(this.useridd).then((responseData) => {
      const projectids = JSON.parse(JSON.stringify(responseData));
      projectids.forEach((Object: any) => {
        const currproj = Object.project_id;
        this.userprojids.push(currproj);
      });
    }).then(() => {
      this.userprojids.forEach((project) => {
        this.projectService.getProjectInfo(project).then((responseData) => {
          const projinfo = JSON.parse(JSON.stringify(responseData));
          projinfo.forEach((Object: any) => {
            // tslint:disable: no-string-literal
            const projname = Object['name'];
            const projdesc = Object['description'];
            const objproj = {project, projname, projdesc};
            this.userprojs.push(objproj);
          });
        });
      });
    });
  }

}
