import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';

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


  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
