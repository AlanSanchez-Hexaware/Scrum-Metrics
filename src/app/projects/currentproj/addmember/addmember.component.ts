import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { UserService } from 'src/app/register/users.service';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  myControl = new FormControl();
  myControl2 = new FormControl();
  filteredOptions: Observable<string[]>;
  projid = sessionStorage.getItem('currprojid');
  usernames: string[] = [];
  usersMap = new Map();

  constructor(private dialogRef: MatDialogRef<AddmemberComponent>,
              private userService: UserService,
              private projectsService: ProjectsService) { }

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

  onAddMember(username: string, role: string) {
    this.projectsService.setMember(this.projid, this.usersMap.get(username), role).then((responseData) => {
      // tslint:disable: no-string-literal
      alert(responseData['message']);
    });
    this.onNoClick();
  }

}
