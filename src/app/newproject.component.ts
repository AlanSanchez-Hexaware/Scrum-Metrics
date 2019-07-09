import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm, FormControl } from '@angular/forms';
import { UserService } from './register/users.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewProjectComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  usernames: string[] = [];
  disabledDate = true;

  constructor(public dialogRef: MatDialogRef<NewProjectComponent>, public userService: UserService) { }

  ngOnInit() {
    this.usernames = this.userService.getUsers();
    console.log(this.usernames);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    return this.usernames.filter(usernames => usernames.includes(value));
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
