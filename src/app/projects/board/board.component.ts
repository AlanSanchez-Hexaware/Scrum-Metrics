import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ProjectsService } from 'src/app/projects.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NewStoryComponent } from './new-story/new-story.component';
import { EditstoryComponent } from './editstory/editstory.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  // tslint:disable: no-string-literal
  sprintid = sessionStorage.getItem('sprintid');
  projid = sessionStorage.getItem('currprojid');
  backlogA = [];
  todoA = [];
  progressA = [];
  testA = [];
  reviewA = [];
  doneA = [];
  doneStatus: boolean;

  constructor(private router: Router,
              private projectsService: ProjectsService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.emptyAll();
    if (sessionStorage.getItem('sprint') === null) {
      this.router.navigate(['/app/currentproject']);
    }
    this.projectsService.checkSprint(this.sprintid, this.projid).then((responseData) => {
      const response = JSON.parse(JSON.stringify(responseData));
      response.forEach((Object: any) => {
        if (Object['done'] === 1) {
          this.doneStatus = true;
        } else {
          this.doneStatus = false;
        }
      });
    });
    this.projectsService.getStories(this.projid, this.sprintid).then((responseData) => {
      const response = JSON.parse(JSON.stringify(responseData));
      response.forEach((Object: any) => {
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
      this.ngOnInit();
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      const storyname = event.container.data[event.currentIndex];
      let newcol;
      if (event.container.id === 'cdk-drop-list-0') {
        newcol = '1';
      }
      if (event.container.id === 'cdk-drop-list-1') {
        newcol = '2';
      }
      if (event.container.id === 'cdk-drop-list-2') {
        newcol = '3';
      }
      if (event.container.id === 'cdk-drop-list-3') {
        newcol = '4';
      }
      if (event.container.id === 'cdk-drop-list-4') {
        newcol = '5';
      }
      if (event.container.id === 'cdk-drop-list-5') {
        newcol = '6';
      }
      if (newcol === '1') {
        this.ngOnInit();
      } else {
        if (event.previousContainer.id === 'cdk-drop-list-5' ||
            event.previousContainer.id === 'cdk-drop-list-2' && event.container.id === 'cdk-drop-list-1' ||
            event.previousContainer.id === 'cdk-drop-list-3' && event.container.id === 'cdk-drop-list-1' ||
            event.previousContainer.id === 'cdk-drop-list-4' && event.container.id === 'cdk-drop-list-1' ||
            event.previousContainer.id === 'cdk-drop-list-5' && event.container.id === 'cdk-drop-list-1' ) {
          this.ngOnInit();
        } else {
          this.projectsService.updStoryCol(newcol, storyname, this.sprintid, this.projid).then((responseData) => {
            this.ngOnInit();
          });
        }
      }
    }
  }

  onAddStory() {
    const dialogRef = this.dialog.open(NewStoryComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  onEditStory(story: string) {
    sessionStorage.setItem('story', story);
    const dialogRef = this.dialog.open(EditstoryComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      sessionStorage.removeItem('story');
      this.ngOnInit();
    });
  }

  onEnd() {
    let newsprint;
    if (confirm('Are you sure you want to end this Sprint? Every unfinished story will go to the next Sprint.')) {
      this.projectsService.getNextSprint(this.projid).then((sprintResponses) => {
        const response = JSON.parse(JSON.stringify(sprintResponses));
        response.some((Object: any) => {
          newsprint = Object['sprint_id'];
          return newsprint > this.sprintid;
        });
      }).then(() => {
        this.projectsService.getUnfinishedStories(this.sprintid, this.projid).then((responseData) => {
          const response2 = JSON.parse(JSON.stringify(responseData));
          response2.forEach((Object1: any) => {
            const storyid = Object1['story_id'];
            this.projectsService.moveStory(newsprint, this.projid, storyid).then((responseData2) => {
              console.log(responseData2['message']);
            });
          });
        });
      }).finally(() => {
        this.projectsService.endSprint(this.sprintid, this.projid).then((responseData) => {
          console.log(responseData['message']);
          this.ngOnInit();
        });
      });
    }
  }

  emptyAll() {
    this.backlogA = [];
    this.todoA = [];
    this.progressA = [];
    this.testA = [];
    this.reviewA = [];
    this.doneA = [];
  }

}
