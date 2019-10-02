import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from 'src/app/register/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  userid = sessionStorage.getItem('userid');

  constructor(private dialogRef: MatDialogRef<DeleteuserComponent>,
              private userService: UserService) { }

  ngOnInit() {
  }

  onDelete(form: NgForm) {
    if (form.invalid || !form.value.inPass) {
      return;
    } else {
      this.userService.deleteAccount(this.userid, form.value.inPass);
      this.dialogRef.close();
    }
  }

}
