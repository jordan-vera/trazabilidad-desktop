import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportadorasComponent } from './exportadoras.component';

describe('ExportadorasComponent', () => {
  let component: ExportadorasComponent;
  let fixture: ComponentFixture<ExportadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportadorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
