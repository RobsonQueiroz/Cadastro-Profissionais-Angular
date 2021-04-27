import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { AppRoutingModule } from './app-routing.module';
import { CriarProfissionalComponent } from './criar-profissional/criar-profissional.component';
import {FormsModule} from '@angular/forms';
import { AtualizarProfissionalComponent } from './atualizar-profissional/atualizar-profissional.component';
import { DetalhesProfissionalComponent } from './detalhes-profissional/detalhes-profissional.component';
import { ListaEstabelecimentosComponent } from './lista-estabelecimentos/lista-estabelecimentos.component';
import { AtualizarEstabelecimentoComponent } from './atualizar-estabelecimento/atualizar-estabelecimento.component';
import { DetalhesEstabelecimentoComponent } from './detalhes-estabelecimento/detalhes-estabelecimento.component';
import { CriarEstabelecimentoComponent } from './criar-estabelecimento/criar-estabelecimento.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfissionalComponent,
    CriarProfissionalComponent,
    AtualizarProfissionalComponent,
    DetalhesProfissionalComponent,
    ListaEstabelecimentosComponent,
    AtualizarEstabelecimentoComponent,
    DetalhesEstabelecimentoComponent,
    CriarEstabelecimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
