"use strict";
// LEERE KLASSE OHNE KONSTRUKTOR
class Creature {
}
const newCreature = new Creature();
console.log('newCreature.age: ', newCreature.age); // undefined
//const newCreature1 = new Creature(14); // automatisch angelegter Konstruktor erwartet keine Argumente
// Konstruktoren sind nötig
// KLASSE MIT KONSTRUKTOR
class Creature1 {
    // zum automatischen Anlegen von Props kann Modifizierer 'public' im Konstruktor verwendet werden
    // im Fall mit Konstruktor optionale Props können mit '?' angelegt werden
    constructor(age, height, areal, existingNow) {
        this.age = age;
        this.height = height;
        this.areal = areal;
        this.existingNow = existingNow;
    }
}
const newCreature1_1 = new Creature1(23, 45, 'Europa');
const newCreature1_2 = new Creature1(13, 25, 'Afrika', true);
// Modifier
// - public
// - private
// - static
// - readonly
// Member ohne Modifier sind public
class Creature3 {
    constructor(age, height, areal, isCloned, existingNow) {
        this.age = age;
        this.height = height;
        this.areal = areal;
        this.existingNow = existingNow;
        console.log('Instanz von Creature2 wurde angelegt');
        this.birthdate = (new Date().getFullYear()) - age;
        this.isCloned = isCloned;
    }
    // Methode
    giveAHintAboutCloned() {
        if (this.isCloned) {
            return 'some University studied this';
        }
    }
}
Creature3.idOfCreatureDefinition = 3;
Creature3.idOfCreatureDefinitionNotChangable = 3;
const newCreature3_1 = new Creature3(13, 25, 'Australia', true, false);
console.log('newCreature3_1.giveAHintAboutCloned(): ', newCreature3_1.giveAHintAboutCloned()); // some Unvisersity studied this
console.log('Creature3.idOfCreatureDEfinition: ', Creature3.idOfCreatureDefinition); // 3
Creature3.idOfCreatureDefinition = 4;
console.log('Creature3.idOfCreatureDEfinition: ', Creature3.idOfCreatureDefinition); // 
