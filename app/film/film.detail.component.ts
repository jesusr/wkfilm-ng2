import { Component, Input } from '@angular/core';

import { Film } from './film.component';

@Component({
  selector: 'film-detail',
  template: `
    <div *ngIf="film">
      <h2>Detalle: {{film.title}}</h2>
      <div><label>year: </label>{{film.year}}</div>
      <div>
        <label>nombre: </label>
        <input [(ngModel)]="film.title" placeholder="Título"/>
      </div>
    </div>
  `
})
export class FilmDetail {
  @Input() 
  film: Film;
}