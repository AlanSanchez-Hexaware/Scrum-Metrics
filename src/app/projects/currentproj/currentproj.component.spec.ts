import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentprojComponent } from './currentproj.component';

describe('CurrentprojComponent', () => {
  let component: CurrentprojComponent;
  let fixture: ComponentFixture<CurrentprojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentprojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
