import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estabelecimento } from '../estabelecimento';
import { EstabelecimentoService } from '../estabelecimento.service';

@Component({
  selector: 'app-criar-estabelecimento',
  templateUrl: './criar-estabelecimento.component.html',
  styleUrls: ['./criar-estabelecimento.component.css']
})
export class CriarEstabelecimentoComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento();
  constructor(private EstabelecimentoService: EstabelecimentoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  salvarEstabelecimento(){
    this.EstabelecimentoService.criarEstabelecimento(this.estabelecimento).subscribe( data => {
      console.log(data);
    },
    error => console.log(error));
  }
  listaEstabelecimentos(){
    this.router.navigate(['/estabelecimentos']);
  }

  onSubmit(){
    this.salvarEstabelecimento();
    this.listaEstabelecimentos();
    console.log(this.estabelecimento);
  }

}
