import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPortafolioComponent } from './proyectos-portafolio.component';

describe('ProyectosPortafolioComponent', () => {
  let component: ProyectosPortafolioComponent;
  let fixture: ComponentFixture<ProyectosPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosPortafolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
