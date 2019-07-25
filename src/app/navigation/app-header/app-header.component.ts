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
  name = {};

  @Output() public sidenavToggle = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.name = {fullname: sessionStorage.getItem('name')};
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public openProfile(): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      minWidth: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
