import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NormalParamTableComponent } from './normal-param-table.component';

describe('NormalParamTableComponent', () => {
  let component: NormalParamTableComponent;
  let fixture: ComponentFixture<NormalParamTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalParamTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalParamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
