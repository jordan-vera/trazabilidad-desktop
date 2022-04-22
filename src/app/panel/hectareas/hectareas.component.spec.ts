import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HectareasComponent } from './hectareas.component';

describe('HectareasComponent', () => {
  let component: HectareasComponent;
  let fixture: ComponentFixture<HectareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HectareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HectareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
