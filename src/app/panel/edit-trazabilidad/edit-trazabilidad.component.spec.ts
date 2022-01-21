import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrazabilidadComponent } from './edit-trazabilidad.component';

describe('EditTrazabilidadComponent', () => {
  let component: EditTrazabilidadComponent;
  let fixture: ComponentFixture<EditTrazabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrazabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrazabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
