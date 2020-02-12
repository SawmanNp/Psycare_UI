import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorItemComponent } from './advisor-item.component';

describe('AdvisorItemComponent', () => {
  let component: AdvisorItemComponent;
  let fixture: ComponentFixture<AdvisorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
