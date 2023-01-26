// TRACCIA
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi in console "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".

// DICHIARO LE VARIABILE
// CREARE UN CICLO CHE STAMPI I NUMERI DA UNO A 100 NEI BOX
// CREARE UNA CONDIZIONE PER CUI I NUM DIVISIBILI PER 3 STAMPINO 'FIZZ'
// CREARE UNA CONDIZIONE PER CUI I NUM DIVISIBILI PER 5 STAMPINO 'BUZZ'
// CREARE UNA CONDIZIONE PER CUI I NUM DIVISIBILI SIA PER 3 CHE PER 5 STAMPINO 'FIZZBUZZ'

// DICHIARO LA VARIABILE containerEl
// const containerEl = document.getElementById('container');
// console.log(containerEl);


// DICHIARO LA VARIABILE fizz
// const fizz = containerEl.classList.add('boxFizz');
// DICHIARO LA VARIABILE buzz
// const buzz = 'BUZZ'


const containerEl = document.getElementById('container-fizzbuzz');

for (let i = 1; i <= 100; i++) {

    let listItem;

    if ((i % 5 == 0) &&
        (i % 3 == 0)
    ) {
        listItem = `<li class = 'box box-fizzbuzz'>FizzBuzz<\li>`;
    } else if (i % 3 == 0) {
        listItem = `<li class = 'box box-fizz'>Fizz<\li>`;
    } else if (i % 5 == 0) {
        listItem = `<li class = 'box box-buzz'>Buzz<\li>`;
    } else {
        listItem = `<li class = 'box'>${i}<\li>`;
    }
    containerEl.innerHTML += listItem;
}