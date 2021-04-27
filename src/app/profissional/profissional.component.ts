import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profissional } from '../profissional';
import { ProfissionalService } from '../profissional.service';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  profissionais: Profissional[];
  constructor(private profissionalService: ProfissionalService, 
    private router: Router) { }

  ngOnInit(): void {    
   this.getProfissionais();
  }

  private getProfissionais(){
    this.profissionalService.getProfissionais().subscribe(data => {
      this.profissionais = data;
    });
  }

 

  detalhesProfissional(id:number){
    this.router.navigate(['detalhes-profissional', id]);
  }

  atualizarProfissional(id: number){
    this.router.navigate(['atualizar-profissional', id]);
  }

  apagarProfissional(id:number){
    this.profissionalService.apagarProfissional(id).subscribe( data =>{
      console.log(data);
      this.getProfissionais();
    });
  }
 
}
