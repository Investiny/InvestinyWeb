import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanceprojectComponent } from './lanceproject.component';

describe('LanceprojectComponent', () => {
  let component: LanceprojectComponent;
  let fixture: ComponentFixture<LanceprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanceprojectComponent]
    });
    fixture = TestBed.createComponent(LanceprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
