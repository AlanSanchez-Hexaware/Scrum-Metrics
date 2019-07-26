import { AfterViewInit, ElementRef, Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.css']
})
export class SwaggerComponent implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const ui = SwaggerUI({
      url: './swagger.json',
      domNode: this.el.nativeElement.querySelector('.swagger-container'),
      deepLinking: true,
      presets: [
        SwaggerUI.presets.apis
      ],
    });
  }

}
