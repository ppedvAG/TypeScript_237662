// Erstellen von einer Promise
const myPromise = new Promise((resolve, reject) => {
    // Hier wird die asynchrone Operation durchgeführt
    // Wenn erfolgreich, rufe resolve mit dem Ergebnis auf
    // Wenn fehlgeschlagen, rufe reject mit dem Fehler auf
})

// Handlich von Erfolg und Fehler
myPromise.then((result) => {
    // Hier wird der Code ausgeführt, wenn die Promise erfolgreich ist
}).catch((error) => {
    // Hier wird der Code ausgeführt, wenn die Promise fehlschlägt
});


// Verketten von Promises

async function myAsyncFunction() {
    try{
        const firstPromise = doSomethingAsync();
        const secondPromise = firstPromise.then(result => doAnotherAsync(result));
        const thirdPromise = secondPromise.then(finalResult => doFinalAsync(finalResult));
        // Hier wird der Code ausgeführt, wenn alles erfolgreich ist
    }catch (error) {
        // Hier wird der Code ausgeführt, wenn ein Fehler auftritt
    }
}