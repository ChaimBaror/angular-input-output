import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItmeComponent } from './add-itme.component';

describe('AddItmeComponent', () => {
  let component: AddItmeComponent;
  let fixture: ComponentFixture<AddItmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
