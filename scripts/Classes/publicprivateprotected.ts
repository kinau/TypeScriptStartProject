class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}

/*
// uncomment this block to enable errors.

// EFFECT ON INSTANCES
var foo = new FooBase();
foo.x; // okay
foo.y; // ERROR : private
foo.z; // ERROR : protected

// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
    constructor() {
        super();
        this.x; // okay
        this.y; // ERROR: private
        this.z; // okay
    }
}
*/