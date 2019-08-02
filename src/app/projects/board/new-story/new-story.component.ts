import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent implements OnInit {

  sprintid = sessionStorage.getItem('sprintid');
  projid = sessionStorage.getItem('currprojid');

  constructor(private dialogRef: MatDialogRef<NewStoryComponent>,
              private projectService: ProjectsService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(form: NgForm) {
    this.projectService.setStory(form.value.inStory, this.sprintid, this.projid).then((responseData) => {
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
