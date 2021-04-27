import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarProfissionalComponent } from './atualizar-profissional.component';

describe('AtualizarProfissionalComponent', () => {
  let component: AtualizarProfissionalComponent;
  let fixture: ComponentFixture<AtualizarProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarProfissionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
