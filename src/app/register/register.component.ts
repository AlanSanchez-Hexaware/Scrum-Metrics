import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  onAddUser(form: NgForm){
    alert('User Created');
  }

}
