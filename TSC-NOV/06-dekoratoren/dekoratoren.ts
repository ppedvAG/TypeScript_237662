// Dekorator für Klassen
function logClassName(target: Function) {
    console.log(`Class name: ${target.name}`);
}


// Dekorator für Methoden
function logMethod(target: any, key:string , descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Methode: ${key}`);
        const result = originalMethod.apply(this, args);
        console.log(`Methode: ${result}`);
        return result;
    };

    return descriptor;
}

// Verwendung der Dekoratoren
@logClassName
class MyClass {
    @logMethod
    greet(message:string): string {
        return `Hallo, ${message}!`;
    }
}

// Instanz der Klasse erstellen
const myInstance = new MyClass();

// Methode aufrufen
const greeting = myInstance.greet("Welt");
console.log(greeting);

function AuthorDecorator(author:string): ClassDecorator {
    return function(target: Function) {
        target.prototype.author = author;
    };
}

@AuthorDecorator("John Doe")
class Book {
    prototype: any;
    // Methoden....
    // Attribute
}

const bookinstance = new Book();
console.log(bookinstance.prototype.author);
