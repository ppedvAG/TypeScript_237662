"use strict";
// Funktion, die einen Union-Typ als Rückgabetyp hat
function getUser(id) {
    if (typeof id === 'number') {
        return { id, name: `User ${id}` };
    }
    else {
        return { id, name: `User ${id}` };
    }
}
// Verwendung der Funktion und Ausgabe auf der HTML-Seite
const userId = 42;
const user = getUser(userId);
const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `<p>User ID: ${user.id}, Name: ${user.name}</p>`;
}
