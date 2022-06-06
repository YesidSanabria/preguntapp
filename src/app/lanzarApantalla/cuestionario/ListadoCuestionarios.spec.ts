import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioComponent } from './ListadoCuestionarios';

describe('CuestionarioComponent', () => {
  let component: CuestionarioComponent;
  let fixture: ComponentFixture<CuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
