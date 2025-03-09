function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    return `hello, ${this.name}`;
};

const alice = new Person('Alice');
console.log(alice.greet());

Person.prototype.greet = function(){
    return `hi, ${this.name}`;
};

const bob = new Person('bob');

console.log(alice.greet());
console.log(bob.greet());