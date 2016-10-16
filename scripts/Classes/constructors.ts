class ClassWithoutAConstructor { }
var c = new ClassWithoutAConstructor();

class ClassWithConstructorAndProperties {
    constructor(public x: number, private y: number) { }
}

class ClassWithPropertyInitializer {
    numbers: number[] = []
    add(aNewNumber: number) {
        this.numbers.push(aNewNumber);
    }
}