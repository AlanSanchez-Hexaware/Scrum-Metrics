import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from 'src/app/register/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profilenewpass',
  templateUrl: './profilenewpass.component.html',
  styleUrls: ['./profilenewpass.component.css']
})
export class ProfilenewpassComponent implements OnInit {

  username = sessionStorage.getItem('username');

  constructor(private dialogRef: MatDialogRef<ProfilenewpassComponent>,
              private userService: UserService) { }

  ngOnInit() {
  }

  onSavePass(form: NgForm) {
    if (form.invalid || !form.value.inPass) {
      return;
    } else {
      this.userService.updatePass(this.username, form.value.inPass);
      this.dialogRef.close();
    }
  }

}
