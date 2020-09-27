const scaleUtils = require('./scaleUtils')
const notes = scaleUtils.notes || []

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

    const indexActualNote = notes.indexOf(note.toUpperCase())

    const scale = []

    const initialOctave = 3
    let actualOctave = initialOctave

    ruleSplited.forEach((noteIndex, forIndex) => {
        let realIndex = Number(noteIndex) + indexActualNote

        if (realIndex >= notes.length) {
            realIndex = Math.abs(realIndex - notes.length)
        }

        if (realIndex < indexActualNote && initialOctave === actualOctave && actualOctave < initialOctave + 1) {
            actualOctave++
        } else if (realIndex === indexActualNote && forIndex !== 0 && actualOctave < initialOctave + 1) {
            actualOctave++
        }

        scale.push({ 
            note: notes[realIndex] + actualOctave,
            degree: scaleUtils.getDegree(notes[indexActualNote], notes[realIndex])
        })
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
        name: 'Maior Natural',
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
        name: 'Menor Natural',
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
        name: 'Pentatônica maior',
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
        name: 'Pentatônica menor',
        scale: generateScale(note, '0 3 5 7 10')
    }

}

module.exports = {
    getNaturalMajor,
    getNaturalMinor,
    getPentatonicMajor,
    getPentatonicMinor
}