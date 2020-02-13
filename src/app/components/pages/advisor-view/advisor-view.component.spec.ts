import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorViewComponent } from './advisor-view.component';

describe('AdvisorViewComponent', () => {
  let component: AdvisorViewComponent;
  let fixture: ComponentFixture<AdvisorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
