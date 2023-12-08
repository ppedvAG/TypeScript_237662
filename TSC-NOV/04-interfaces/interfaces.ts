// NUTZEN 1: INTERFACE ALS DATENTYPVORLAGE

interface IPerson {
    age: number;
    firstName: string;
    lastName: string;
}

// Typ Person bestätigt, dass da anonyme Objekt dem gewünschten Shape entspricht
const somePerson: IPerson = {age: 44, firstName: 'Peter', lastName: 'Schulz'};


// NUTZEN 2: INTERFACE ALS VORLAGE FÜR KLASSEN
// Klassen, die so ein Interface implementieren, müssen zumindest die angegebenen Props auch beinhalten

// Restrictins:
// - Wenn eine Klasse eine private Prop hat, kann sie nicht im Interface vorgegeben werden
// - Modifier public ist auch nicht erlaubt. Einfach ohne Modifier deklarieren
// - static als Modifier auch nicht erlaubt
// - statische Member können generell nicht in Interface vorgegeben werden
interface ICreature4 {
    // readonly ist erlaubt
    readonly birthdate: number;

    //isCloned:boolean; -> Property 'isCloned' is a private mofdifier

    // public age: number; -> 'public' modifier cannot appear on a type member
    age: number;
    height: number;
    areal: string;

    // Optionale Member sind erlaubt
    existingNow?: boolean;
    giveAHintAboutCloned(): "some University studied this" | undefined; // nur Name, Argumente und Rückgabetyp
    // können vergeben werden
}

class Creature4 implements ICreature4 {
    readonly birthdate: number;
    private _myPrivateField: number;
    private isCloned: boolean;
    constructor(public age: number, public height: number, public areal: string, isCloned: boolean, public existingNow?: boolean)
    {
        console.log('Instanz von Creature2 wurde angelegt');
        this.birthdate = (new Date().getFullYear()) - age;
        this.isCloned = isCloned;
        this._myPrivateField = 42;
    }

    private _myPrivatMethode(): void {
        console.log('This is a private Method.');
    }

    giveAHintAboutCloned(): "some University studied this" | undefined {
        if(this.isCloned) {
            return 'some University studied this';
        }
    }

    static idOfCreatureDefinition: number = 3;
    static readonly idOfCreatureDefinitionNotChangable: number = 3;
}

const x = new Creature4(47, 9, 'Berlin', true, false);

const hint = x.giveAHintAboutCloned();

if(hint !== undefined) {
    console.log(hint);
}else {
    console.log("No hint available.");
}

