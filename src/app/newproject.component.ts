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
  storedusers: string[] = [];
  disabledDate = true;
  selectedFile: File;
  url: any = '../assets/img/scrum.png';

  constructor(public dialogRef: MatDialogRef<NewProjectComponent>, public userService: UserService) { }

  ngOnInit() {
    this.usernames = this.userService.getUsers();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(username => this._filter(username))
    );
  }

  private _filter(value: string): string[] {
    return this.usernames.filter(username => username.includes(value));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddUser(value: string): void {
    this.storedusers.push(value);
    this.myControl.reset();
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

  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      // tslint:disable-next-line: prefer-const
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event1) => {
        this.url = event1.target.result;
      };
    }
    this.selectedFile = event.target.files[0];
  }

}
