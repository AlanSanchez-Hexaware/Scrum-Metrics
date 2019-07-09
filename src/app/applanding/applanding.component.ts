import { Component, OnInit } from '@angular/core';
import { NewProjectComponent } from '../newproject.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-applanding',
  templateUrl: './applanding.component.html',
  styleUrls: ['./applanding.component.css']
})
export class ApplandingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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
