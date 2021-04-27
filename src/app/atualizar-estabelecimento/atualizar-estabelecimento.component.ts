import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estabelecimento } from '../estabelecimento';
import { EstabelecimentoService } from '../estabelecimento.service';



@Component({
  selector: 'app-atualizar-estabelecimento',
  templateUrl: './atualizar-estabelecimento.component.html',
  styleUrls: ['./atualizar-estabelecimento.component.css']
})
export class AtualizarEstabelecimentoComponent implements OnInit {

  id: number;
  estabelecimento: Estabelecimento = new Estabelecimento();

  constructor(private EstabelecimentoService: EstabelecimentoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.EstabelecimentoService.getEstabelecimentoById(this.id).subscribe(data =>{
      this.estabelecimento = data;
    },  error => console.log(error) );
  }

  onSubmit(){
    this.EstabelecimentoService.atualizarEstabelecimento(this.id, this.estabelecimento ).subscribe(data =>{
      this.listaEstabelecimentos();
    },
    error => console.log(error));
  }

  salvarProfissional(){
    this.EstabelecimentoService.criarEstabelecimento(this.estabelecimento).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));

  }

  listaEstabelecimentos(){
    this.router.navigate(['/estabelecimentos']);
  }


}
