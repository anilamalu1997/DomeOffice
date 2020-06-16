import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrheaderComponent } from './usrheader.component';

describe('UsrheaderComponent', () => {
  let component: UsrheaderComponent;
  let fixture: ComponentFixture<UsrheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
