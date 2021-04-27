import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profissional } from '../profissional';
import { ProfissionalService } from '../profissional.service';

@Component({
  selector: 'app-criar-profissional',
  templateUrl: './criar-profissional.component.html',
  styleUrls: ['./criar-profissional.component.css']
})
export class CriarProfissionalComponent implements OnInit {

  profissional: Profissional = new Profissional();
  constructor(private ProfissionalService: ProfissionalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  salvarProfissional(){
    this.ProfissionalService.criarProfissional(this.profissional).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));

  }

  irParaListaProfissionais(){
    this.router.navigate(['/profissionais']);
  }

  onSubmit(){
    this.salvarProfissional();
    this.irParaListaProfissionais();
    console.log(this.profissional);
  }

}
