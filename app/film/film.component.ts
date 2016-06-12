import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'film',
    templateUrl: 'film.detail.html'
})
export class filmComponent implements OnInit {
    title: string;
    year: number;
    
    constructor() { }

    ngOnInit() { }

}