import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Estabelecimento } from '../estabelecimento';
import{EstabelecimentoService} from '../estabelecimento.service'
@Component({
  selector: 'app-detalhes-estabelecimento',
  templateUrl: './detalhes-estabelecimento.component.html',
  styleUrls: ['./detalhes-estabelecimento.component.css']
})
export class DetalhesEstabelecimentoComponent implements OnInit {

  id:number
  estabelecimento: Estabelecimento
  constructor(private route: ActivatedRoute, private estabelecimentoService: EstabelecimentoService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.estabelecimento = new Estabelecimento();
    this.estabelecimentoService.getEstabelecimentoById(this.id).subscribe(data =>{
      this.estabelecimento = data;
    })
  }
}
