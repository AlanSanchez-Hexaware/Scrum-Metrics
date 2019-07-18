import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm, FormControl } from '@angular/forms';
import { UserService } from './register/users.service';
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProjectsService } from './projects.service';

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



  ngOnInit() {
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

  onAddUser(value: string, role: string): void {
    if (this.usernames.includes(value)) {
      this.rolesMap.set(value, role);
      this.storedusers.push(value);
      this.roles.push(role);
      this.myControl.reset();
    } else {
      alert('Can\'t find that user.');
      this.myControl.reset();
    }
  }

  changeCheck(event) {
    this.disabledDate = !event.checked;
  }

  stringLiteralArray<T extends string>(...args: T[]): T[] {
    return args;
  }

  onAddProject(form: NgForm) {

    if (form.invalid) {
      return;
    }
    const projectname: string = form.value.inName;
    const imgName: string = form.value.inName + '.jpg';
    // const file: File = new File(this.selectedFile, imgName, {type: 'image/jpeg'});
    // this.savenewimg.saveImg(this.selectedFile, imgName);
    const firstDate1: Date = form.value.inDate1;
    const firstDate2: Date = form.value.inDate2 || null;
    const fixedDate: string = firstDate1.getFullYear() + '-' + firstDate1.getMonth() + '-' + firstDate1.getDate();
    // const fixedDate2: string = firstDate2.getFullYear() + '-' + firstDate2.getMonth() + '-' + firstDate2.getDate();
    this.projectService.setProject(
      projectname,
      form.value.inDesc,
      fixedDate,
      firstDate2,
      imgName);

    this.storedusers.forEach((user) => {
      class selectUser   {
        public selectus = 'select' + user;
      }
      const selectu1 = {};
      // console.log(Reflect.defineProperty(selectu1, 'selectus', selectUser));
      const select = 'select';
      Reflect.set(selectu1, 'selectus', 'select' + user);
      // console.log(form.value.select[2] + 'testt');
      console.log(form.value);
      console.log(projectname + '/' + this.usersMap.get(user) + '/' + form.value.select);
      this.projectService.setMember(projectname, this.usersMap.get(user));
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

}
