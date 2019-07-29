import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm, FormControl } from '@angular/forms';
import { UserService } from './register/users.service';
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProjectsService } from './projects.service';
import * as Q from 'q';
import { format } from 'url';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})

export class NewProjectComponent implements OnInit {

  myControl = new FormControl();
  myControl2 = new FormControl();
  filteredOptions: Observable<string[]>;
  usernames: string[] = [];
  roles: string[] = [];
  storedusers: string[] = [];
  disabledDate = true;
  selectedFile: File;
  url: any = '../assets/img/scrum.png';
  firstDate: string = null;
  usersMap = new Map();
  rolesMap = new Map();

  constructor(
    public dialogRef: MatDialogRef<NewProjectComponent>,
    public userService: UserService,
    public projectService: ProjectsService) { }



  emptyAll() {
    this.storedusers = [];
    this.roles = [];
    this.rolesMap = null;
    this.usersMap = null;
    this.selectedFile = null;
    this.usernames = [];
    this.usernames.length = 0;
  }

  ngOnInit() {
    // this.emptyAll();
    this.usernames = this.userService.getUsersA();
    this.usersMap = this.userService.getUsersM();
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

  onAddUser(value: string, role: string) {
    if (role != null) {
      if (this.usernames.includes(value) && !this.myControl.invalid && role != null) {
        if (!this.storedusers.includes(value)) {
          if (!this.myControl2.invalid) {
            this.rolesMap.set(value, role);
            this.storedusers.push(value);
            this.roles.push(role);
            this.myControl.reset();
            this.myControl2.reset();
          } else {
            alert('Pleas enter a role');
            this.myControl2.reset();
          }
        } else {
          alert('This user is already in');
          this.myControl.reset();
          this.myControl2.reset();
        }
      } else {
        alert('Can\'t find that user.');
        this.myControl.reset();
        this.myControl2.reset();
      }
    } else {
      alert('You need to enter a role.');
    }
  }

  changeCheck(event) {
    this.disabledDate = !event.checked;
  }

  stringLiteralArray<T extends string>(...args: T[]): T[] {
    return args;
  }

  onAddProject(form: NgForm) {
    if (form.invalid || this.usersMap.size === 0) {
      return;
    }
    const projectname: string = form.value.inName;
    const projDesc: string = form.value.inDesc;
    const imgName: string = form.value.inName + '.jpg';
    // const file: File = new File(this.selectedFile, imgName, {type: 'image/jpeg'});
    // this.savenewimg.saveImg(this.selectedFile, imgName);
    const firstDate1: Date = form.value.inDate1;
    const lastDate: Date = form.value.inDate2;
    const fixedDate: string = firstDate1.getFullYear() + '-' + firstDate1.getMonth() + '-' + firstDate1.getDate();
    let fixedlastDate: string;
    if ( form.value.inDate2 != null ) {
      fixedlastDate = lastDate.getFullYear() + '-' + lastDate.getMonth() + '-' + lastDate.getDate();
    } else {
      fixedlastDate = null;
    }
    this.projectService.setProject(
      projectname,
      projDesc,
      fixedDate,
      fixedlastDate,
      imgName);
    let thisproj;
    this.projectService.getProject(form.value.inName).then(result => {
      const projectids = JSON.parse(JSON.stringify(result));
      projectids.forEach((Object: any) => {
        const currproj = Object.project_id;
        thisproj = currproj;
        this.storedusers.forEach((user) => {
          this.projectService.setMember(thisproj, this.usersMap.get(user), this.rolesMap.get(user));
        });
        this.emptyAll();
      });
    });
    this.dialogRef.close();
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

  deleteUser(user: string, i: number) {
    this.storedusers.splice(i, 1);
    this.roles.splice(i, 1);
    this.rolesMap.delete(user);
  }

}
