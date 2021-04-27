
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarEstabelecimentoComponent } from './atualizar-estabelecimento/atualizar-estabelecimento.component';
import { AtualizarProfissionalComponent } from './atualizar-profissional/atualizar-profissional.component';
import { CriarEstabelecimentoComponent } from './criar-estabelecimento/criar-estabelecimento.component';
import { CriarProfissionalComponent } from './criar-profissional/criar-profissional.component';
import { DetalhesEstabelecimentoComponent } from './detalhes-estabelecimento/detalhes-estabelecimento.component';
import { DetalhesProfissionalComponent } from './detalhes-profissional/detalhes-profissional.component';
import { ListaEstabelecimentosComponent } from './lista-estabelecimentos/lista-estabelecimentos.component';
import { ProfissionalComponent } from './profissional/profissional.component';


const routes: Routes = [
    {path:"profissionais", component: ProfissionalComponent },
    {path:"criar-profissional", component: CriarProfissionalComponent},
    {path: '', redirectTo:'profissionais', pathMatch: 'full'},
    {path: 'atualizar-profissional/:id', component: AtualizarProfissionalComponent},
    {path: 'detalhes-profissional/:id', component: DetalhesProfissionalComponent},
    {path: 'estabelecimentos', component: ListaEstabelecimentosComponent},
    {path: 'criar-estabelecimento', component: CriarEstabelecimentoComponent},
    {path: 'atualizar-estabelecimento/:id', component: AtualizarEstabelecimentoComponent},
    {path: 'detalhes-estabelecimento/:id', component: DetalhesEstabelecimentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }