const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const cont = text.trim().split(" ");
    return cont.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const signos = text.replace(/[^\w]/g, "");
    // let count = 0;
    // for (let i = 0; i <= text.length; i++) {
    //   if (text[i] !== " " && text[i] !== (/[^\w]/g)) {
    //     count = count + 1;
    //   }
    // }
    // return count;
    return signos.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // const a = text.replace(/[^\w]/g,"");
    let a = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " "  && text[i] !== (/[^\w]/g)) {
        a = a + 1;
      }
    }
    const b = text.trim().split((" "));
    const long = (a / b.length).toFixed(2);
    return parseFloat(long);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // const numCo = text.replace(/[^0-9]/g, "");
    // return numCo.length;
    let numCo = 0;
    const num = text.trim().split(" ");
    for (let i = 0; i < num.length; i++) {
      const numero = parseFloat(num[i] * 1);
      if (!isNaN(numero)) {
        numCo = numCo + 1;
      }
    }
    return numCo;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let numSum = 0;
    const num = text.trim().split(" ");
    for (let i = 0; i < num.length; i++) {
      const numero = parseFloat(num[i] * 1);
      if (!isNaN(numero) && num[i] !== " ") {
        numSum += numero;
      }
    }
    return numSum;
  },
};

export default analyzer;
