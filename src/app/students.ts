import {Component} from 'angular2/core';

@Component({
    selector: 'starter-app',
    templateUrl: 'src/app/students.html',
    directives: [],
    pipes: []
})

export class StarterApp {
    students: [];

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

    this.addStudent = function (name) {
        this.students.push(name);
    }
}
