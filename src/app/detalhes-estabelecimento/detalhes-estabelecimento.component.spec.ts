import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEstabelecimentoComponent } from './detalhes-estabelecimento.component';

describe('DetalhesEstabelecimentoComponent', () => {
  let component: DetalhesEstabelecimentoComponent;
  let fixture: ComponentFixture<DetalhesEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesEstabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
