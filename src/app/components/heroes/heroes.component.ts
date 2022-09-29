import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroesService } from './../../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private heroesService: HeroesService ) { }

  heroes: Hero[] = []

selectedHero?: Hero

selectHero(hero : Hero):void{
this.selectedHero = hero
}

getHeroes(): void {
  this.heroes = this.heroesService.getHeroes()
}

ngOnInit(): void {
  this.getHeroes()
}

}
