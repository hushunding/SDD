import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquPrjParamTableComponent } from './equ-prj-param-table.component';

describe('EquPrjParamTableComponent', () => {
  let component: EquPrjParamTableComponent;
  let fixture: ComponentFixture<EquPrjParamTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquPrjParamTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquPrjParamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
