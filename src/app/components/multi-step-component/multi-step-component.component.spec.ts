import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepComponentComponent } from './multi-step-component.component';

describe('MultiStepComponentComponent', () => {
  let component: MultiStepComponentComponent;
  let fixture: ComponentFixture<MultiStepComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiStepComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
