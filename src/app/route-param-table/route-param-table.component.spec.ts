import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamTableComponent } from './route-param-table.component';

describe('RouteParamTableComponent', () => {
  let component: RouteParamTableComponent;
  let fixture: ComponentFixture<RouteParamTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteParamTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
