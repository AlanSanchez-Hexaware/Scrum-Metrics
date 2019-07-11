import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm, FormControl } from '@angular/forms';
import { UserService } from './register/users.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProjectsService } from './projects.service';
import { saveAs } from 'file-saver';

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

  constructor(
    public dialogRef: MatDialogRef<NewProjectComponent>,
    public userService: UserService,
    public projectService: ProjectsService) { }

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
    if (form.invalid) {
      return;
    }
    const imgName: string = '../assets/projectimgs/' + form.value.username + this.url;
    // const file: File = new File(this.selectedFile, imgName, {type: 'image/jpeg'});
    this.projectService.setProject(
      form.value.inName,
      form.value.inDesc,
      form.value.inDate1,
      form.value.inDate2,
      this.selectedFile,
      this.storedusers);
    form.resetForm();
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

}
