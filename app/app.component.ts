import {Component} from '@angular/core';
// import {} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-app',
  directives: [],
  template: `
    <h1>{{title}}</h1>
    <div>{{film.title}} ({{film.year}})</div>
  `,
})
export class AppComponent {
  title: string = 'WkFilm-ng2';
  film: Film = {
    title: 'Windstorm',
    year: '2008'
  };
}