import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComRouteParamTableComponent } from './com-route-param-table.component';

describe('ComRouteParamTableComponent', () => {
  let component: ComRouteParamTableComponent;
  let fixture: ComponentFixture<ComRouteParamTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComRouteParamTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComRouteParamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
