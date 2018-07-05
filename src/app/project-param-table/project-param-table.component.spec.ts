import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectParamTableComponent } from './project-param-table.component';

describe('ProjectParamTableComponent', () => {
  let component: ProjectParamTableComponent;
  let fixture: ComponentFixture<ProjectParamTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectParamTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectParamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
