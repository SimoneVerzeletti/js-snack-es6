// //SNACK 1 bici più leggera
// const bici = [
//   { nome: "MBK", peso: 15 },
//   { nome: "BMX", peso: 25 },
//   { nome: "BStreet", peso: 15 },
//   { nome: "Speedster", peso: 10 },
//   { nome: "RoadMax", peso: 9 },
//   { nome: "CarbonLite", peso: 7 },
//   { nome: "MountainKing", peso: 22 },
//   { nome: "GravelPro", peso: 11 },
//   { nome: "AeroRacer", peso: 8 },
//   { nome: "EcoRide", peso: 18 },
// ];

// let biciLeggera = bici[0];

// for (let i = 0; i < bici.length; i++) {
//   const curBici = bici[i];
//   if (curBici.peso < biciLeggera.peso) {
//     biciLeggera = curBici;
//   }
// }
// console.log(
//   `La bici più leggera è ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg`
// );

// //SNACK 2
// const squaCalcio = [
//   { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
//   { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
//   { nome: "Brescia", puntiFatti: 0, falliSubiti: 0 },
//   { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
//   { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
//   { nome: "Torino", puntiFatti: 0, falliSubiti: 0 },
// ];

// for (let i = 0; i < squaCalcio.length; i++) {
//   squaCalcio[i].puntiFatti = numeroRandom(1, 100);
//   squaCalcio[i].falliSubiti = numeroRandom(1, 50);
// }

// let falliSubitiNomeSquadra = [];

// for (let i = 0; i < squaCalcio.length; i++) {
//   const squadra = squaCalcio[i];

//   falliSubitiNomeSquadra.push({
//     nome: squadra.nome,
//     falliSubiti: squadra.falliSubiti,
//   });
// }

// console.log(falliSubitiNomeSquadra);

// //SNACK 3
// const numeri = [34, 87, 15, 62, 5, 93, 48, 29, 71, 10];
// //utilizzo la funzione
// const nuovoArray = selezionaIntervallo(numeri, 2, 8);
// console.log(nuovoArray);

//SNACK 4
const array1 = [1, 2, 3, 4, 5];
const array2 = ["a", "b", "c"];

console.log(fondiArray(array1, array2));
