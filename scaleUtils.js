const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

const degrees = [
    { name: 'Tônica/Primeira', degree: '1' },
    { name: 'Segunda menor', degree: '2' },
    { name: 'Segunda maior', degree: '3' },
    { name: 'Terça menor', degree: '4' },
    { name: 'Terça maior', degree: '5' },
    { name: 'Quarta justa', degree: '6' },
    { name: 'Quarta aumentada', degree: '7' },
    { name: 'Quinta justa', degree: '8' },
    { name: 'Sexta menor', degree: '9' },
    { name: 'Sexta', degree: '10' },
    { name: 'Sétima menor', degree: '11' },
    { name: 'Sétima', degree: '12' }
]

/**
 * 
 * @param { String } referenceKey key to reference
 * @param { String } searchedKey key to calculate the degree
 * @returns { Object} Degree object, the diference between referece and searched key
 */
const getDegree = (referenceKey, searchedKey) => {
    const indexReferenceKey = notes.indexOf(notes.find(note => note === referenceKey))
    let indexsearchedKey = notes.indexOf(notes.find(note => note === searchedKey))

    if (indexsearchedKey < indexReferenceKey) {
        indexsearchedKey += notes.length
    }

    return degrees[Math.abs(indexsearchedKey - indexReferenceKey)]
}

module.exports = { notes, getDegree }