import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCasoComponent } from './modificar-caso.component';

describe('ModificarCasoComponent', () => {
  let component: ModificarCasoComponent;
  let fixture: ComponentFixture<ModificarCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
