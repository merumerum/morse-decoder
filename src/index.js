const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const modMORSE_TABLE = {};
  for (let key in MORSE_TABLE) {
    let modKey = key
      .replace(/\./g, '10')
      .replace(/-/g, '11');
    while (modKey.length < 10) {
      modKey = '0' + modKey;
    }
    modMORSE_TABLE[modKey] = MORSE_TABLE[key];
  }

  let res = '';
  for (let i = 0; i < expr.length; i += 10) {
    let morseChar = expr.slice(i, i + 10);
    if (modMORSE_TABLE[morseChar]) {
      res += modMORSE_TABLE[morseChar];
    } else if (morseChar === '**********') {
      res += ' ';
    }
  }
  return res;
}

module.exports = {
  decode
}