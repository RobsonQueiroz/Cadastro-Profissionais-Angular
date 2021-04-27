import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estabelecimento } from '../estabelecimento';
import { EstabelecimentoService } from '../estabelecimento.service';

@Component({
  selector: 'app-lista-estabelecimentos',
  templateUrl: './lista-estabelecimentos.component.html',
  styleUrls: ['./lista-estabelecimentos.component.css']
})
export class ListaEstabelecimentosComponent implements OnInit {

  estabelecimentos: Estabelecimento[];
  constructor(private estabelecimentoService: EstabelecimentoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEstabelecimentos();
  }

  private getEstabelecimentos(){
    this.estabelecimentoService.getEstabelecimentos().subscribe(data =>{
      this.estabelecimentos = data;
    })
  }

  detalhesEstabelecimento(id:number){
    this.router.navigate(['detalhes-estabelecimento', id]);
  }

  atualizarEstabelecimento(id: number){
    this.router.navigate(['atualizar-estabelecimento', id]);
  }

  apagarEstabelecimento(id:number){
    this.estabelecimentoService.apagarEstabelecimento(id).subscribe( data =>{
      console.log(data);
      this.getEstabelecimentos();
    });
  }
}
