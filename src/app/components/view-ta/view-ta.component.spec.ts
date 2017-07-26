import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaComponent } from './view-ta.component';

describe('ViewTaComponent', () => {
  let component: ViewTaComponent;
  let fixture: ComponentFixture<ViewTaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
