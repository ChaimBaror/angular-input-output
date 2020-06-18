import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFnComponent } from './parent-fn.component';

describe('ParentFnComponent', () => {
  let component: ParentFnComponent;
  let fixture: ComponentFixture<ParentFnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
