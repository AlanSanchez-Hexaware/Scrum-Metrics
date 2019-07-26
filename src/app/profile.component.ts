import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, NgForm } from '@angular/forms';
import { UserService } from './register/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  myControl = new FormControl();
  selectedFile: File;
  url: any = '../assets/img/stockprofile.png';
  thisname = {};
  curname = sessionStorage.getItem('name');
  thisemail = {};
  curemail = sessionStorage.getItem('email');
  user = {};
  username = sessionStorage.getItem('username');
  disabledUser = true;
  disabledEmail = true;

  constructor(public dialogRef: MatDialogRef<ProfileComponent>,
              public userService: UserService) { }

  ngOnInit() {
    this.user = { name: this.username };
    this.thisname = { name: this.curname };
    this.thisemail = { name: this.curemail };
  }

  changeCheck(event) {
    if (this.disabledUser === true) {
      this.disabledUser = false;
    } else {
      this.disabledUser = true;
    }
  }

  public changeCheck2(event) {
    if (this.disabledEmail === true) {
      this.disabledEmail = false;
    } else {
      this.disabledEmail = true;
    }
  }

  onNoClick(): void {
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

  saveProfile(form: NgForm) {
    // tslint:disable: triple-equals
    if (form.invalid || form.value.inMail == '' && form.value.inName == '') {
      return;
    } else {
      if (form.value.inMail != null && form.value.inName != null && this.disabledUser == false && this.disabledEmail == false) {
        this.userService.updateAll(this.username, form.value.inName, form.value.inMail);
        this.dialogRef.close();
      } else {
        if (form.value.inName != null && this.disabledUser == false) {
          this.userService.updateName(this.username, form.value.inName);
          this.dialogRef.close();
        } else {
          if (form.value.inMail != null && this.disabledEmail == false) {
            this.userService.updateMail(this.username, form.value.inMail);
            this.dialogRef.close();
          } else {
            this.dialogRef.close();
            return;
          }
        }
      }
    }
  }

}
