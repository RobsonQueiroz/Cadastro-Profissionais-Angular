import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEstabelecimentoComponent } from './criar-estabelecimento.component';

describe('CriarEstabelecimentoComponent', () => {
  let component: CriarEstabelecimentoComponent;
  let fixture: ComponentFixture<CriarEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEstabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
