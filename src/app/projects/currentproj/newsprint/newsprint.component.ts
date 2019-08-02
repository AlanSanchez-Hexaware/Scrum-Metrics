import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProjectsService } from 'src/app/projects.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-newsprint',
  templateUrl: './newsprint.component.html',
  styleUrls: ['./newsprint.component.css']
})
export class NewsprintComponent implements OnInit {

  projid = sessionStorage.getItem('currprojid');
  myControl = new FormControl();

  constructor(private dialogRef: MatDialogRef<NewsprintComponent>,
              private projectsService: ProjectsService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate() {
    this.projectsService.newSprint(this.myControl.value, this.projid).then((responseData) => {
      // tslint:disable: no-string-literal
      if (responseData['error']) {
        alert('Error, try again.');
      } else {
        alert(responseData['message']);
      }
      this.onNoClick();
    });
  }

}
