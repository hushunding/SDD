import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipParamTableComponent } from './equip-param-table.component';

describe('EquipParamTableComponent', () => {
  let component: EquipParamTableComponent;
  let fixture: ComponentFixture<EquipParamTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipParamTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipParamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
