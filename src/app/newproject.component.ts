import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { UserService } from './register/users.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewProjectComponent implements OnInit {

  disabledDate = true;

  constructor(public dialogRef: MatDialogRef<NewProjectComponent>, public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeCheck(event) {
    this.disabledDate = !event.checked;
  }

  onAddProject(form: NgForm) {
    form.resetForm();
    if (form.invalid) {
      return;
    }
    form.resetForm();
  }

}
