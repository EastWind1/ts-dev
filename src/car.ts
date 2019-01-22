export class Car {
    private name: string;
    constructor(name) {
        this.name = name;
    }
    toString() {
        return 'My name is ' + this.name;
    }
}