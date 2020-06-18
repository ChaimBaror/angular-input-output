import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JItmeComponent } from './j-itme.component';

describe('JItmeComponent', () => {
  let component: JItmeComponent;
  let fixture: ComponentFixture<JItmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JItmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JItmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
