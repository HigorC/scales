const notes = require('./notes')

/**
 * Convert a scale rule in a real scale.
 * The param rule is an array with numbers. Each number represents a note in scale.
 * Ex input: '0 2 4 5 7 9 11 0
 * Ex output: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'] 
 * @param { String } note
 * @param { String } rule
 * @returns { Array<String> }
 */
const generateScale = (note, rule) => {
    const ruleSplited = rule.split(' ')

    const indexActualNote = notes.indexOf(notes.find(scaleNote => scaleNote.note === note.toUpperCase()))

    const scale = []

    ruleSplited.forEach(noteIndex => {
        let realIndex = Number(noteIndex) + indexActualNote

        if (realIndex >= notes.length) {
            realIndex = Math.abs(realIndex - notes.length)
        }
        scale.push(notes[realIndex].note)
    })

    return scale
}

/**
 * Returns a major scale from a passed note
 * @param { String } note 
 * @returns { Object }
 */
const getNaturalMajor = (note) => {
    return {
        name: 'Major Natural',
        scale: generateScale(note, '0 2 4 5 7 9 11 0')
    }
}

/**
 * Returns a minor scale from a passed note
 * @param { String } note 
 * @returns { Array<String> }
 */
const getNaturalMinor = (note) => {
    return {
        name: 'Minor Natural',
        scale: generateScale(note, '0 2 3 5 7 8 10 0')
    }
}

/**
 * Returns a major pentatonic scale from a passed note
 * @param { String } note 
 * @returns { Array<String> }
 */
const getPentatonicMajor = (note) => {
    return {
        name: 'Major Pentatonic',
        scale: generateScale(note, '0 2 4 7 9')
    }
}

/**
 * Returns a minor pentatonic scale from a passed note
 * @param { String } note 
 * @returns { Array<String> }
 */
const getPentatonicMinor = (note) => {
    return {
        name: 'Minor Pentatonic',
        scale: generateScale(note, '0 3 5 7 10')
    }

}

module.exports = {
    getNaturalMajor,
    getNaturalMinor,
    getPentatonicMajor,
    getPentatonicMinor
}