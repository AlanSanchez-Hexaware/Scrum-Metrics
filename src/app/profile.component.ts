import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormControl, NgForm } from '@angular/forms';
import { UserService } from './register/users.service';
import { ProfilenewpassComponent } from './profilenewpass/profilenewpass.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  myControl = new FormControl();
  selectedFile: File;
  url: any = '../assets/img/stockprofile.png';
  curname = sessionStorage.getItem('name');
  curemail = sessionStorage.getItem('email');
  username = sessionStorage.getItem('username');
  disabledUser = true;
  disabledEmail = true;

  constructor(public dialogRef: MatDialogRef<ProfileComponent>,
              public userService: UserService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getProfilePic();
  }

  getProfilePic() {
    this.userService.getUserImg(this.username).then((responseData) => {
      // tslint:disable: no-string-literal
      const newimg = responseData[0].image;
      if (newimg.length < 5000) {
        this.url = '../assets/img/stockprofile.png';
      } else {
        sessionStorage.setItem('image', newimg);
        this.convertImage(newimg);
      }
    });
  }

  convertImage(newimg) {
    const imageBlob = this.dataURItoBlob(newimg);
    const imageFile = new File([imageBlob], 'profilePic', {type: 'image/jpeg'});
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = (event1) => {
        this.url = event1.currentTarget;
        this.url = this.url.result;
    };
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
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
        this.userService.updateImage(this.username, reader.result.toString().split(',')[1]).then((responseData) => {
          // tslint:disable: no-string-literal
          alert(responseData['message']);
        });
      };
      reader.onerror = (error) => {
        console.log(error);
      };
    }
    this.selectedFile = event.target.files[0];
  }

  changePass() {
    const dialogRef = this.dialog.open(ProfilenewpassComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteAccount() {
    const dialogRef = this.dialog.open(DeleteuserComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  saveProfile(form: NgForm) {
    // tslint:disable: triple-equals
    if (form.invalid || form.value.inMail == null && form.value.inName == null) {
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
