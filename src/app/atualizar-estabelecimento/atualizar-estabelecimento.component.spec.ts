import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEstabelecimentoComponent } from './atualizar-estabelecimento.component';

describe('AtualizarEstabelecimentoComponent', () => {
  let component: AtualizarEstabelecimentoComponent;
  let fixture: ComponentFixture<AtualizarEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarEstabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
