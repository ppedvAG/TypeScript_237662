"use strict";
// NUTZEN 1: INTERFACE ALS DATENTYPVORLAGE
// Typ Person bestätigt, dass da anonyme Objekt dem gewünschten Shape entspricht
const somePerson = { age: 44, firstName: 'Peter', lastName: 'Schulz' };
class Creature4 {
    constructor(age, height, areal, isCloned, existingNow) {
        this.age = age;
        this.height = height;
        this.areal = areal;
        this.existingNow = existingNow;
        console.log('Instanz von Creature2 wurde angelegt');
        this.birthdate = (new Date().getFullYear()) - age;
        this.isCloned = isCloned;
        this._myPrivateField = 42;
    }
    _myPrivatMethode() {
        console.log('This is a private Method.');
    }
    giveAHintAboutCloned() {
        if (this.isCloned) {
            return 'some University studied this';
        }
    }
}
Creature4.idOfCreatureDefinition = 3;
Creature4.idOfCreatureDefinitionNotChangable = 3;
const x = new Creature4(47, 9, 'Berlin', true, false);
const hint = x.giveAHintAboutCloned();
if (hint !== undefined) {
    console.log(hint);
}
else {
    console.log("No hint available.");
}
/*

Übung 1.
Implementieren Sie ein Interface, welches die Fähigkeit eines Transportmittels beschreibt,
andere Transportmittel mitzutransportieren (z.B. Schiffe die Autos transportieren).
Überlegen Sie, welche Methoden so eine Klasse implementieren sollte und
implementieren Sie dann für die Klassen Schiff und Flugzeug das Interface.
Erweitern Sie die Klassen Schiff und Flugzeug zudem so, dass es ein Transportmittel-Objekt aufnehmen und
in seiner BeschreibeMich()-Methode Informationen darüber ausgeben kann.
Schreiben Sie danach eine neue Methode, welche als Parameter zwei Transportmittelobjekte übernimmt und
nach Prüfung der Interfaces entweder ein Objekt auf das andere belädt oder eine Fehlermeldung ausgibt.


*/ 
