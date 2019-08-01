import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProjectsService } from 'src/app/projects.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-newrole',
  templateUrl: './newrole.component.html',
  styleUrls: ['./newrole.component.css']
})
export class NewroleComponent implements OnInit {

  myControl = new FormControl();
  projid = sessionStorage.getItem('currprojid');
  userid = sessionStorage.getItem('userupd');

  constructor(private dialogRef: MatDialogRef<NewroleComponent>,
              private projectsService: ProjectsService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.projectsService.updRole(this.projid, this.userid, this.myControl.value).then((responseData) => {
      // tslint:disable: no-string-literal
      if (responseData['error']) {
        alert('Error, try again.');
      } else {
        alert(responseData['message']);
      }
    });
    this.onNoClick();
  }

}
