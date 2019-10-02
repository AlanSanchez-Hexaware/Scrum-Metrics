import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileComponent } from 'src/app/profile.component';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/register/users.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  username = sessionStorage.getItem('username');
  fullname = sessionStorage.getItem('name');
  projname = sessionStorage.getItem('currproj');
  sprintname = sessionStorage.getItem('sprint');
  url: any = '../assets/img/stockprofile.png';

  @Output() public sidenavToggle = new EventEmitter();

  constructor(public dialog: MatDialog,
              public userService: UserService) { }

  ngOnInit() {
    this.checkProj();
    this.getProfilePic();
  }

  public onToggleSidenav = () => {
    this.checkProj();
    this.sidenavToggle.emit();
  }

  public openProfile(): void {
    this.checkProj();
    const dialogRef = this.dialog.open(ProfileComponent, {
      minWidth: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  checkProj() {
    if (sessionStorage.getItem('currproj') === null) {
      this.projname = 'No open project';
      this.sprintname = '';
    }
  }

  getProfilePic() {
    this.userService.getUserImg(this.username).then((responseData) => {
      // tslint:disable: no-string-literal
      const newimg = responseData[0].image;
      sessionStorage.setItem('image', newimg);
      this.convertImage(newimg);
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

}
