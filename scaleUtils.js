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
 * Remove all numbers from string
 * @param { String } note
 * @returns { String }
 */
const removeOctave = (note) => {
    return note.replace(/\d/g, '')
}

/**
 * 
 * @param { String } referenceKey key to reference
 * @param { String } searchedKey key to calculate the degree
 * @returns { Object} Degree object, the diference between referece and searched key
 */
const getDegree = (referenceKey, searchedKey) => {
    const indexReferenceKey = notes.indexOf(notes.find(note => note === removeOctave(referenceKey)))
    let indexsearchedKey = notes.indexOf(notes.find(note => note === removeOctave(searchedKey)))

    if (indexsearchedKey < indexReferenceKey) {
        indexsearchedKey += notes.length
    }

    return degrees[Math.abs(indexsearchedKey - indexReferenceKey)]
}

/**
 * Mount and return a array with notes and respective octave
 * @param { Number } initialOctave
 * @param { Number } octavesQuantity
 * @returns { String[] }
 */
const getNotesWithOctaves = (initialOctave = 3, octavesQuantity = 3) => {
    let allNotes = []
    for (let actualOctave = initialOctave; actualOctave < initialOctave + octavesQuantity; actualOctave++) {
        allNotes = allNotes.concat(notes.map(note => note + actualOctave))
    }
    return allNotes
}

module.exports = { getDegree, getNotesWithOctaves }