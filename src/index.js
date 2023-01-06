const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);
    arr.map(function(element, index){
        let a = element.replace(/^0+/, '')
        a = a.replace(/10/gi, '\.')
        a = a.replace(/11/gi, '-')
        arr[index] = a;
    })
    arr.map(function(element, index){
        if (element === '**********'){
            arr[index] = ' ';
        }
        for (let key in MORSE_TABLE){
            if (key == element){
                arr[index] = MORSE_TABLE[key];
            }
        }
    })
    return arr.join('');
}

module.exports = {
    decode
}