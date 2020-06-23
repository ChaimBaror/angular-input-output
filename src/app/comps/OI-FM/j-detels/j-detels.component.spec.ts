import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JDetelsComponent } from './j-detels.component';

describe('JDetelsComponent', () => {
  let component: JDetelsComponent;
  let fixture: ComponentFixture<JDetelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JDetelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JDetelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
