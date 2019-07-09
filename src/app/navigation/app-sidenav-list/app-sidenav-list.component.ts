import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from 'src/app/newproject.component';

@Component({
  selector: 'app-app-sidenav-list',
  templateUrl: './app-sidenav-list.component.html',
  styleUrls: ['./app-sidenav-list.component.css']
})
export class AppSidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      minWidth: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
