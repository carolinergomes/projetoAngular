import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  heroes: Hero[] = [
    {id : 1, name: 'Mulher Maravilha'},
    {id : 2, name: 'Viuva Negra'},
    {id : 3, name: 'Capitã Marvel'},
    {id : 4, name: 'Tempestade'},
    {id : 5, name: 'Jean Grey'}

];
getHeroes(): Hero []  {
  return this.heroes
}
}