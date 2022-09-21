import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() { }
  hero: Hero = {
    id: 1,
    name: 'Thor'
  };
  selectedHero?: Hero

  heroes: Hero[] = [
    {id : 1, name: 'Mulher Maravilha'},
    {id : 2, name: 'Viuva Negra'},
    {id : 3, name: 'Capitã Marvel'},
    {id : 4, name: 'Tempestade'},
    {id : 5, name: 'Jean Grey'}

];
selectHero(hero : Hero):void{
this.selectedHero = hero

}


  ngOnInit(): void {
  }

}


//criar novo componente (criar obj aluno - id, nome, end,idade,nota1, nota2,media,status)
//criar no componente (aluno) uma lista de 10 alunos
// rederizar se o aluno esta aprovado ou repro
