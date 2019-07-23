import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  disabledAgreement = true;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  changeCheck(event){
    this.disabledAgreement = !event.checked;
  }

  onAddUser(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      if (form.value.inPass === form.value.confPass) {
        this.userService.setUser(form.value.inName, form.value.inEmail, form.value.inUser, form.value.inPass);
        form.resetForm();
      } else {
        alert('Passwords don\'t match.');
        return;
      }
    }
  }

  validatePass() {

  }

}
