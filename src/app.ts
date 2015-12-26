import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: '<h1>Hello Angular2</h1>'
})
export class App {
    constructor() {
        console.log('TEST');
    }
}