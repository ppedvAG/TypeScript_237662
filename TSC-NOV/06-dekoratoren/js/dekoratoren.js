"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Dekorator für Klassen
function logClassName(target) {
    console.log(`Class name: ${target.name}`);
}
// Dekorator für Methoden
function logMethod(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Methode: ${key}`);
        const result = originalMethod.apply(this, args);
        console.log(`Methode: ${result}`);
        return result;
    };
    return descriptor;
}
// Verwendung der Dekoratoren
let MyClass = class MyClass {
    greet(message) {
        return `Hallo, ${message}!`;
    }
};
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], MyClass.prototype, "greet", null);
MyClass = __decorate([
    logClassName
], MyClass);
// Instanz der Klasse erstellen
const myInstance = new MyClass();
// Methode aufrufen
const greeting = myInstance.greet("Welt");
console.log(greeting);
function AuthorDecorator(author) {
    return function (target) {
        target.prototype.author = author;
    };
}
let Book = class Book {
};
Book = __decorate([
    AuthorDecorator("John Doe")
], Book);
const bookinstance = new Book();
console.log(bookinstance.prototype.author);
