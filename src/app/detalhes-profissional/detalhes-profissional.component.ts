import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profissional } from '../profissional';
import { ProfissionalService } from '../profissional.service';

@Component({
  selector: 'app-detalhes-profissional',
  templateUrl: './detalhes-profissional.component.html',
  styleUrls: ['./detalhes-profissional.component.css']
})
export class DetalhesProfissionalComponent implements OnInit {

  id:number
  profissional: Profissional
  constructor(private route: ActivatedRoute, private profissionalService: ProfissionalService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.profissional = new Profissional();
    this.profissionalService.getProfissionalById(this.id).subscribe(data =>{
      this.profissional = data;
    })
  }

}
