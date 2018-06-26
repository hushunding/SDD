import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeworLoadDataComponent } from './newor-load-data.component';

describe('NeworLoadDataComponent', () => {
  let component: NeworLoadDataComponent;
  let fixture: ComponentFixture<NeworLoadDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeworLoadDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeworLoadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
