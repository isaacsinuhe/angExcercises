import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiContainerComponent } from './multi-container.component';

describe('MultiContainerComponent', () => {
  let component: MultiContainerComponent;
  let fixture: ComponentFixture<MultiContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
