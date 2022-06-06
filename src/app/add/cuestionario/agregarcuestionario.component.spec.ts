import { ComponentFixture, TestBed } from '@angular/core/testing';

import { agregarCuestionarioComponent } from './agregarcuestionario.component';

describe('CuestionarioComponent', () => {
  let component: agregarCuestionarioComponent;
  let fixture: ComponentFixture<agregarCuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ agregarCuestionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(agregarCuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
