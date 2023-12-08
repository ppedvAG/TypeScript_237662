// Arrays
console.info('\n ARRAYS')

// Arrays können an bestimmte Datentypen angepasst werden.
// Ohne Typangabe ist ein Array of any
let myArray1 = [];
//myArray1 = [4, 6, 3];
//myArray1 = ['a', 'b', 'c'];


let myNumbers: number[] = [5, 5.2, 6543];
//myNumbers = ['s'];

// Array ist in TS eine generische Klasse
let myStrings: Array<string> = ['r', 't'];

let myStrings2 = myStrings;

console.log("myStrings2 == myStrings ? 'gleich' : 'ungleich' :>> ", myStrings2 === myStrings ? 'gleich' : 'ungleich');

let myStrings3 = ['r', 't'];
console.log("myStrings3 == myStrings ? 'gleich' : 'ungleich' :>> ", myStrings3 === myStrings ? 'gleich' : 'ungleich');
console.log("myStrings3 == myStrings ? 'gleich' : 'ungleich' :>> ", myStrings3 == myStrings ? 'gleich' : 'ungleich');


// Kopie von einem Array
let myStringsCopy = [...myStrings];

console.log("myStringsCopy === myStrings ? 'gleich' : 'ungleich' :>> ", myStringsCopy === myStrings ? 'gleich' : 'ungleich');

console.log("Inhalt gleich?: ", JSON.stringify(myStringsCopy) === JSON.stringify(myStrings) ? 'gleich' : 'ungleich');
console.info('\n HTML COLLECTION')

let headings2 = document.getElementsByTagName('h2'); // HTMLCollectionOf<HTMLHeadingElement>
console.log('headings2 :>> ', headings2); // headings2 :>>  HTMLCollection(2) [h2, h2]
// hat 2 Methoden:
// - item()
// - namedItem()




console.info('\n HTML COLLECTION of Elements')

let redElements = document.getElementsByClassName('red'); // HTMLCollectionOf<Element>



console.info('\n NODE LIST of Elements')
// let numberInputs = document.querySelector('input[type = "number"]'); // Element | null
// oben: nur das erste zutreffende Element wird selektiert
// unten: alle werden selektiert
let numberInputs = document.querySelectorAll('input[type = "number"]'); // NodeListOf<Element>
console.log('numberInputs :>> ', numberInputs); // numberInputs :>>  NodeList(3) [input, input, input]
// - entries()
// - forEach()
// - item()
// - keys()
// - values()



console.info('\n NODE LIST of Elements TO ARRAY')
// let nodeListEntries: Array<HTMLInputElement> = numberInputs; 
// Type 'NodeListOf<Element>' is missing the following properties from type 'HTMLInputElement[]':
//  pop, push, concat, join, and 14 more.ts(2740)

// bei es5
let nodeListEntriesES5: Array<HTMLInputElement> = Array.prototype.slice.call(numberInputs);

// bei neueren es-Versionen:
// let nodeListEntriesES6: Array<HTMLInputElement> = Array.from(numberInputs); // Type 'Element[]' is not assignable to type 'HTMLInputElement[]'.
let nodeListEntriesES6: Array<HTMLInputElement> = Array.from((numberInputs as NodeListOf<HTMLInputElement>)); // Type 'Element[]' is not assignable to type 'HTMLInputElement[]'.

// oder Type Assertion später bei jedem Element einzeln in einer Iteration ausführen
// let nodeListEntriesES6: Array<Element> = Array.from(numberInputs);



console.info('\n TUPEL')

// Die gewünschten Datentypen vom Tupel werden INNERHALB von eckigen Klammern angegeben
let tupel: [Date, string];
// Zuweisung von Werten ist wie beim Array
tupel = [new Date(), 'warmer Tag'];

// Tupel können optional Elemente beinhalten;
let tupel2: [x: number, y:string, boolean?];
tupel2 = [1, 'wert für 1', true];
tupel2 = [2, 'wert für 2'];

// Auf Einträge kann man mit Indizes zugreifen:
console.log('tupel2[1] : ', tupel2); // Wert für 2

// Tupel als Benutzerdefinierte Typen
type coordinate2D = [number, number];

function drawPolygon() {
    let coordInputs = document.querySelectorAll('div#coordinates input');
    console.log('coordInputs: ', coordInputs);
    let coordInputs2 = [...(coordInputs as NodeListOf<HTMLInputElement>)]
    let coord1: coordinate2D = [0, 0];
    let coord2: coordinate2D = [0, 0];
    let coord3: coordinate2D = [0, 0];

    for(let i = 0; i < coordInputs2.length; i++) {
        console.log('schleife');
        (i === 0) ? coord1[0] = +coordInputs2[i].value : 'coord1[0] = 0';
        (i === 1) ? coord1[1] = +coordInputs2[i].value : 'coord1[0] = 0';
        (i === 2) ? coord2[0] = +coordInputs2[i].value : 'coord1[0] = 0';
        (i === 3) ? coord2[1] = +coordInputs2[i].value : 'coord1[0] = 0';
        (i === 4) ? coord3[0] = +coordInputs2[i].value : 'coord1[0] = 0';
        (i === 5) ? coord3[1] = +coordInputs2[i].value : 'coord1[0] = 0';
        console.log('coord1 :', coord1);
        console.log('coord2 :', coord2);
        console.log('coord3 :', coord3);
    }

    let mySVG = document.getElementById('svgForPolygon');

    let htmlString = `
    <polygon points="
    ${coord1}
    ${coord2}
    ${coord3}
    " style="fill: lime; stroke: purple; stroke-width: 3" />`;

    mySVG!.innerHTML = htmlString;
}

(document.getElementById('draw') as HTMLButtonElement).onclick = drawPolygon;

/*let numb1: number = Number('4');
let numb2: number = + '4';

console.log(numb2 + numb1);


let stringValue = "10";
let numberValue = parseInt(stringValue);
console.log(numberValue);*/