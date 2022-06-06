import { ComponentFixture, TestBed } from '@angular/core/testing';

import { editarCuestionarioComponent } from './editarcuestionario.component';

describe('CuestionarioComponent', () => {
  let component: editarCuestionarioComponent;
  let fixture: ComponentFixture<editarCuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ editarCuestionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(editarCuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
