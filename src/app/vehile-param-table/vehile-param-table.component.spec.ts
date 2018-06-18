import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehileParamTableComponent } from './vehile-param-table.component';

describe('VehileParamTableComponent', () => {
  let component: VehileParamTableComponent;
  let fixture: ComponentFixture<VehileParamTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehileParamTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehileParamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
