import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDemandaComponent } from './crear-demanda.component';

describe('CrearDemandaComponent', () => {
  let component: CrearDemandaComponent;
  let fixture: ComponentFixture<CrearDemandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDemandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDemandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
