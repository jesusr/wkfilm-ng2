import {Component} from '@angular/core';
// import {} from 'ng2-bootstrap/ng2-bootstrap';
import {Film} from './film/film.component';
import {FilmDetail} from './film/film.detail.component';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div *ngFor="let film of films" (click)="onSelect(film)">{{film.title}} ({{film.year}})</div>
    <film-detail [film]="selected"></film-detail>
  `,
  directives: [FilmDetail],
  styles: ['body {background: #f0f0f0;}']
})
export class AppComponent {
  public films: Film[] = FILMS;
  title: string = 'WkFilm-ng2';
  selected: Film;
  onSelect(film: Film) {
    window.console.log('asdasds');
    this.selected = film;
  }
}
var FILMS: Film[] = [
    { "year": 1100, "title": "Mr. Nice" },
    { "year": 1200, "title": "Narco" },
    { "year": 1300, "title": "Bombasto" },
    { "year": 1400, "title": "Celeritas" },
    { "year": 1500, "title": "Magneta" },
    { "year": 1600, "title": "RubberMan" },
    { "year": 1700, "title": "Dynama" },
    { "year": 1800, "title": "Dr IQ" },
    { "year": 1900, "title": "Magma" },
    { "year": 2000, "title": "Tornado" }
];