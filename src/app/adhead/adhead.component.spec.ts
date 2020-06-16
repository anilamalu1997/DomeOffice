import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdheadComponent } from './adhead.component';

describe('AdheadComponent', () => {
  let component: AdheadComponent;
  let fixture: ComponentFixture<AdheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
