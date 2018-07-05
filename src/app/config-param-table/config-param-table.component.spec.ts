import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigParamTableComponent } from './config-param-table.component';

describe('ConfigParamTableComponent', () => {
  let component: ConfigParamTableComponent;
  let fixture: ComponentFixture<ConfigParamTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigParamTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigParamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
