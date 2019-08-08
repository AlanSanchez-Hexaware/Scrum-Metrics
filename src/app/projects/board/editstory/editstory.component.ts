import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-editstory',
  templateUrl: './editstory.component.html',
  styleUrls: ['./editstory.component.css']
})
export class EditstoryComponent implements OnInit {

  currstory = sessionStorage.getItem('story');
  sprintid = sessionStorage.getItem('sprintid');
  projid = sessionStorage.getItem('currprojid');

  constructor(private dialogRef: MatDialogRef<EditstoryComponent>,
              private projectService: ProjectsService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEdit(form: NgForm) {
    this.projectService.editStory(this.sprintid, this.projid, this.currstory, form.value.inStory).then((responseData) => {
      // tslint:disable: no-string-literal
      alert(responseData['message']);
      this.onNoClick();
    });
  }

}
