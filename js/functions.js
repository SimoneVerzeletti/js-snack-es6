//numero random
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selezionaIntervallo(array, a, b) {
  const nuovoArray = [];

  // controllo che gli indici siano validi
  if (a < 0 || b >= array.length || a > b) {
    console.log("Intervallo non valido");
    return nuovoArray;
  }
  for (let i = a; i <= b; i++) {
    nuovoArray.push(array[i]);
  }

  return nuovoArray;
}

function fondiArray(array1, array2) {
  const arrayFuso = [];

  // controllo la presenza di elementi negli array
  for (let i = 0; i < array1.length || i < array2.length; i++) {
    if (i < array1.length) {
      arrayFuso.push(array1[i]);
    }
    if (i < array2.length) {
      arrayFuso.push(array2[i]);
    }
  }

  return arrayFuso;
}
