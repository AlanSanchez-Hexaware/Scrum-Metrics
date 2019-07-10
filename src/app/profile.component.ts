import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  myControl = new FormControl();
  selectedFile: File;
  url: any = '../assets/img/stockprofile.png';

  constructor(public dialogRef: MatDialogRef<ProfileComponent>) { }

  name = 'test';
  email = 'test';

  ngOnInit() {
    this.name = 'test';
    this.email = 'test2';
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
        this.url = event1.target.result;
      };
    }
    this.selectedFile = event.target.files[0];
  }

}
