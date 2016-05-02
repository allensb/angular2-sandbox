import {Component} from 'angular2/core';

@Component({
    selector: 'starter-app',
    templateUrl: 'src/app/home/home.html',
    directives: [],
    pipes: []
})

export class StarterApp {
    players: any[];

    constructor() {
        this.init();
    }

    init() {
        this.players = [
            {name: 'Josh'},
            {name: 'Chris'},
            {name: 'Sarah'}];

        return this.players;
    }

    add (name) {
        this.players.push(name);
    }

    search (name) {
        this.players.push(name);
    }
}
