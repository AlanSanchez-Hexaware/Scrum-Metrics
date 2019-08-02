import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ProjectsService } from 'src/app/projects.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NewStoryComponent } from './new-story/new-story.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  sprintid = sessionStorage.getItem('sprintid');
  projid = sessionStorage.getItem('currprojid');
  backlogA = [];
  todoA = [];
  progressA = [];
  testA = [];
  reviewA = [];
  doneA = [];

  constructor(private router: Router,
              private projectsService: ProjectsService,
              public dialog: MatDialog) { }

  ngOnInit() {
    if (sessionStorage.getItem('sprint') === null) {
      this.router.navigate(['/app/currentproject']);
    }
    this.projectsService.getStories(this.projid, this.sprintid).then((responseData) => {
      const response = JSON.parse(JSON.stringify(responseData));
      response.forEach((Object: any) => {
        // tslint:disable: no-string-literal
        if (Object['col_id'] === 1) {
          this.backlogA.push(Object['description']);
        }
        if (Object['col_id'] === 2) {
          this.todoA.push(Object['description']);
        }
        if (Object['col_id'] === 3) {
          this.progressA.push(Object['description']);
        }
        if (Object['col_id'] === 4) {
          this.testA.push(Object['description']);
        }
        if (Object['col_id'] === 5) {
          this.reviewA.push(Object['description']);
        }
        if (Object['col_id'] === 6) {
          this.doneA.push(Object['description']);
        }
      });
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  onAddStory() {
    const dialogRef = this.dialog.open(NewStoryComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
