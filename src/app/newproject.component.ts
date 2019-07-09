import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewProjectComponent {

  disabledDate = true;

  constructor(public dialogRef: MatDialogRef<NewProjectComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeCheck(event){
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
