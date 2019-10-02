import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilenewpassComponent } from './profilenewpass.component';

describe('ProfilenewpassComponent', () => {
  let component: ProfilenewpassComponent;
  let fixture: ComponentFixture<ProfilenewpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilenewpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilenewpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
