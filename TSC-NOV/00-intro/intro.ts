console.log("tsc funktioniert");

let p1 = document.getElementById('p1');
console.log("p1: ", p1);
console.log("typeof: ", typeof p1);
console.log("p1 instanceof HTMLElement: ", p1 instanceof HTMLElement);
console.log("p1 === null: ", p1 === null);


/*
    Login form

    Erstellen Sie eine Mini-Anwendung, die nach einem Benutzernamen und nach einem Passwort fragt und dann den Benutzer begrüßt.
    Jedes Passwort wird erstmal akzeptiert

*/

function login(): void {

    let u: string = (<HTMLInputElement> document.getElementById('user')!).value;
    
    document.getElementById('hi')!.textContent = "Hello " + u;

}