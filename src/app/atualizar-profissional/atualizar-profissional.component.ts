import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from '../profissional';
import { ProfissionalService } from '../profissional.service';

@Component({
  selector: 'app-atualizar-profissional',
  templateUrl: './atualizar-profissional.component.html',
  styleUrls: ['./atualizar-profissional.component.css']
})
export class AtualizarProfissionalComponent implements OnInit {

  id: number;
  profissional: Profissional = new Profissional();

  constructor(private ProfissionalService: ProfissionalService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ProfissionalService.getProfissionalById(this.id).subscribe(data =>{
      this.profissional = data;
    },  error => console.log(error) );
  }

  onSubmit(){
    this.ProfissionalService.atualizarProfissional(this.id, this.profissional ).subscribe(data =>{
      this.irParaListaDeProfissionais();
    },
    error => console.log(error));
  }

  salvarProfissional(){
    this.ProfissionalService.criarProfissional(this.profissional).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));

  }

  irParaListaDeProfissionais(){
    this.router.navigate(['/profissionais']);
  }


  

}

