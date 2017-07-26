import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadGridComponent } from './spread-grid.component';

describe('SpreadGridComponent', () => {
  let component: SpreadGridComponent;
  let fixture: ComponentFixture<SpreadGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
