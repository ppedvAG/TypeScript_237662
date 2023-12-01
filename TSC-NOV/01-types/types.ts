console.info('\n ANY')

// ANY MIT TYPENANPASSUNG
let myAny; // ohne Datentypenangaben und ohne Initialisierung ist die Variable
console.log('MyAny: ', typeof myAny);
// vom Typ 'any', der Datentyp wird bei der Zuweisung aber angepasst
let myString1 = 'string1wert';
myAny = myString1;
console.log('MyAny: ', typeof myAny);

let myNumber1: number = 34;
//myNumber1 = myAny;
//let myNumber2: number = myAny;

// ANY FEST GESETZT
let myAny1: any; // mit Datentypenangaben und ohne Initialisierung ist die Variable vom typ 'any'
myAny1 = 'string';
console.log('MyAny: ', typeof myAny);

let MyNumber3 = 456;
console.log('MyAny: ', typeof myAny);
MyNumber3 = myAny1;
console.log('MyNumber3: ', typeof MyNumber3);



console.info('\n UNKNOWN')
let myUnknown: unknown;
myUnknown = undefined;
myUnknown = null;
myUnknown = 'string';

// Bei Zuweisung von unknown zu anderen Datentypen ist TypeChecking an
//let myString2: string = myUnknown;
//let myUndefined: undefined = myUnknown;
//let myNull: null = myUnknown;

// Kein impliziter Typzugriff
let value: unknown;
if(typeof value === 'string') {
    (value as string).toUpperCase();
}else {
    console.error('value ist kein string.');
}

console.info('\n VOID')
let myVoid: void;

let myFct1 = () => {}; // Datentyp von myFct1: () => void
let myFct2 = (): void => {}; // das gleiche wie oben
let myFct3 = (): void => {
    //return 'string';
    // return myVoid; // funktioniert
    return; // das gleiche wie Zeile davor
};

myVoid = undefined; // kompatible
//myVoid = null;


console.info('\n NULL')
let myNull:null = null;
//myNull = undefined;


console.info('\n NEVER')
//let myNever: never = never;

/*
// BEI FUNKTIONEN
let myFct4 = () => {
    // Datentyp - {} => never, wegen unreachable code
    throw new Error();
    console.log('object');
}


function throwError(message: string) : never {
    throw new Error(message);
}

const result = throwError("Something went wrong");

if(false) {
    // Diese Bedingung ist immer falsch, daher wird eiser Codeblock nie ausgeführt
    // Der Compiler erkennt, dass 'result' nie den Typ 'never' haben kann
    console.log(result);
}
*/

/*
    Password-Confirm:
    Wenn der Benutzer in zwei Input-Feldern den gleichen Text eingegeben hat,
    wird eine Meldung für Erfolg gezeigt, sonst ein Fehlerhinweis
*/

// Die Eingabefelder und das Ausgabeelement werden anhand ihrer IDs ausgegeben
var inp1 = document.getElementById('pw1') as HTMLInputElement;
var inp2 = document.getElementById('pw2') as HTMLInputElement;
var outp = document.getElementById('hint') as HTMLParagraphElement;

// Diese Funktion wird aufgerufen, wenn der Button mit der ID 'confirm' geklickt wird
function handleInput() {
    // Überprüfe, ob beide EIngabefelder ausgefüllt sind und ihre Werte übereinstimmen
    if(inp1.value && inp2.value && inp1.value === inp2.value) {
        outp.textContent = 'Bestätigt';
    }else {
        outp.textContent = 'Eingaben fehlen oder sind falsch';
    }
}

document.getElementById('confirm')!.addEventListener('click', handleInput);