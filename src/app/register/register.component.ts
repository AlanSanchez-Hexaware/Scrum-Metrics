import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  enteredName = '';
  enteredEmail = '';
  enteredUser = '';
  enteredPass = '';

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onAddUser(form: NgForm) {
    if (form.invalid) {
      return;
    }
    alert('User Created');
    this.userService.setUser(form.value.inName, form.value.inEmail, form.value.inUser, form.value.inPass);
    form.resetForm();
  }

}
