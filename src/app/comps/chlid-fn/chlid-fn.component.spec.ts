import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlidFnComponent } from './chlid-fn.component';

describe('ChlidFnComponent', () => {
  let component: ChlidFnComponent;
  let fixture: ComponentFixture<ChlidFnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChlidFnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChlidFnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
