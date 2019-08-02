import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { UserService } from 'src/app/register/users.service';
import { MatDialog } from '@angular/material';
import { AddmemberComponent } from './addmember/addmember.component';
import { NgForm } from '@angular/forms';
import { NewroleComponent } from './newrole/newrole.component';
import { NewsprintComponent } from './newsprint/newsprint.component';

@Component({
  selector: 'app-currentproj',
  templateUrl: './currentproj.component.html',
  styleUrls: ['./currentproj.component.css']
})
export class CurrentprojComponent implements OnInit {

  url: any = '../assets/img/scrum.png';
  selectedFile: File;
  projname = sessionStorage.getItem('currproj');
  projid = sessionStorage.getItem('currprojid');
  projdesc: any;
  startdate: any;
  enddate: any;
  membersMap = new Map();
  memberids = [];
  membernames = [];
  memberroles = [];
  sprints = [];

  constructor(private router: Router,
              private projectService: ProjectsService,
              private usersService: UserService,
              public dialog: MatDialog) { }

  ngOnInit() {
    if (sessionStorage.getItem('currproj') === null) {
      this.router.navigate(['/app/projects']);
    }
    this.getProjectInfo();
    this.getProjectMembers();
    this.getSprints();
  }

  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      // tslint:disable-next-line: prefer-const
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event1) => {
        this.url = event1.currentTarget;
        this.url = this.url.result;
      };
    }
    this.selectedFile = event.target.files[0];
  }

  getProjectInfo() {
    this.projectService.getProjectInfo(this.projid).then((responseData) => {
      const projinfo = JSON.parse(JSON.stringify(responseData));
      // tslint:disable: no-string-literal
      projinfo.forEach((Object: any) => {
        this.projdesc = Object['description'];
        const start: string = Object['start_date'];
        const end: string = Object['end_date'];
        this.startdate = start.slice(0, start.indexOf('T'));
        if (Object['end_date'] === null) {
          this.enddate = 'Not given.';
        } else {
          this.enddate = end.slice(0, end.indexOf('T'));
        }
      });
    });
  }

  getProjectMembers() {
    this.projectService.getMembers(this.projid).then((responseData) => {
      const response = JSON.parse(JSON.stringify(responseData));
      response.forEach((Object: any) => {
        this.memberids.push(Object['user_id']);
        this.memberroles.push(Object['user_type']);
        this.usersService.getUserName(Object['user_id']).then((responseData2) => {
          const response2 = JSON.parse(JSON.stringify(responseData2));
          response2.forEach((Object2: any) => {
            this.membernames.push(Object2['name']);
          });
        });
      });
    });
  }

  getSprints() {
    this.projectService.getSprints(this.projid).then((responseData) => {
      const response = JSON.parse(JSON.stringify(responseData));
      response.forEach((Object: any) => {
        this.sprints.push(Object['name']);
      });
    });
  }

  addUser() {
    const dialogRef = this.dialog.open(AddmemberComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addSprint() {
    const dialogRef = this.dialog.open(NewsprintComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  newRole(userid: string) {
    sessionStorage.setItem('userupd', userid);
    const dialogRef = this.dialog.open(NewroleComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      sessionStorage.removeItem('userupd');
      console.log('The dialog was closed');
    });
  }

  setNewDesc(form: NgForm) {
    this.projectService.setNewDesc(this.projid, form.value.inDesc).then((responseData) => {
      if (responseData['error']) {
        alert('Error. Try again.');
      } else {
        alert(responseData['message']);
      }
    });
  }

  deleteMember(userid: string) {
    this.projectService.deleteMember(userid, this.projid).then((responseData) => {
      if (responseData['error']) {
        alert('Error. Try again.');
      } else {
        alert(responseData['message']);
      }
    });
  }

}
