import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplandingComponent } from './applanding.component';

describe('ApplandingComponent', () => {
  let component: ApplandingComponent;
  let fixture: ComponentFixture<ApplandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
