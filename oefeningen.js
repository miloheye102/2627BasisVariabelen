// 
let voornaam = "Milo";
let achternaam = "Heye";

let volledigeNaam = voornaam + " " + achternaam;
console.log(volledigeNaam);


// oefening 2
console.log(`Hallo, mijn naam is ${volledigeNaam} en ik leer JavaScript.`);


// oefening 3
let woord = "Programmeren";
console.log(woord.length);


// oefening 4
let stad = "Zarren";
console.log(stad.toUpperCase());

// 2. Number 

// Oefening 5
const getal1 = 15;
const getal2 = 4;

const som = getal1 + getal2;
const verschil = getal1 - getal2;
const product = getal1 * getal2;

console.log("Som:", som);
console.log("Verschil:", verschil);
console.log("Product:", product);

// Oefening 6
const rest = 23 % 5;
console.log("Restwaarde:", rest);

// Oefening 7
const prijs = 19.99;
const aantal = 3;

const totalePrijs = (prijs * aantal).toFixed(2);
console.log("Totale prijs:", totalePrijs);

// Oefening 8
let teller = 0;
teller++;
console.log("Nieuwe waarde teller:", teller);

// 3. Boolean

// Oefening 9
const leeftijd = 18;
const minimumLeeftijd = 18;

const isLegaal = leeftijd >= minimumLeeftijd;
console.log("Is legaal:", isLegaal);

// Oefening 10
const isGelijk = "5" === 5;
console.log("Strikte gelijkheid test ('5' === 5):", isGelijk);

// Oefening 11
const isIngelogd = true;
const isUitgelogd = !isIngelogd;

console.log("Is ingelogd:", isIngelogd);
console.log("Is uitgelogd:", isUitgelogd);