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
    '*****': ' ',
};

function decode(expr) {
    let everyLettInArr = []
    let lettInMorse = []
    let lettEveryFiveMorse = []
    let wordInStringMorse = []
    let wordInPeoplLang = []
    let timesToSliceEveryLett = expr.length / 2
    let timesToSliceEveryWord = expr.length / 10
    let i = 0
    let j = 0

    while (i < timesToSliceEveryLett) {
        everyLettInArr.push(expr.slice(i * 2, i + (2 + i)))
        i++
    }

    for (let everyLett of everyLettInArr) {
        if (everyLett === '10') {
            lettInMorse.push('.')
        } else if (everyLett === '11') {
            lettInMorse.push('-')
        } else if (everyLett === '00') {
            lettInMorse.push('s')
        } else {
            lettInMorse.push('*')
        }
    }

    while (j < timesToSliceEveryWord) {
        lettEveryFiveMorse.push(lettInMorse.slice(j * 5, (j * 5) + 5))
        j++
    }

    for (let lett of lettEveryFiveMorse) {
        wordInStringMorse.push(lett.join('').replace(/s/g, ''))
    }

    for (let morsLett of wordInStringMorse) {
        if (Object.keys(MORSE_TABLE).includes(morsLett)) {
            wordInPeoplLang.push(MORSE_TABLE[morsLett])
        }
    }

    return wordInPeoplLang.join('')
}

module.exports = {
    decode
}