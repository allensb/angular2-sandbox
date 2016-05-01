import {Component} from 'angular2/core';

@Component({
    selector: 'starter-app',
    templateUrl: 'src/app/home.html',
    directives: [],
    pipes: []
})

export class StarterApp {
    students: any[];

    constructor() {
        this.init();
    }

    init() {
        this.students = [
            {name: 'Josh'},
            {name: 'Chris'},
            {name: 'Sarah'}];

        return this.students;
    }

    addStudent (name) {
        this.students.push(name);
    }
}
