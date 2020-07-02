const notes = require('./notes')

/**
 * Convert a scale rule in a real scale
 * Ex input: 'C', 'T T S T T T S'
 * Ex output: ['C', 'D', 'E', 'F', 'G', 'A', 'B'] 
 * @param { String } note 
 * @param { String } rule 
 * @returns { Array<String> }
 */
const generateScale = (note, rule) => {
    const ruleSplited = rule.split(' ')
    let indexActualNote = notes.indexOf(note)
    const scale = []

    scale.push(note)

    ruleSplited.forEach(interval => {
        indexActualNote += /T|t/.test(interval) ? 2 : 1

        if (indexActualNote >= notes.length) {
            indexActualNote = Math.abs(indexActualNote - notes.length)
        }

        scale.push(notes[indexActualNote])
    })

    return scale
}

/**
 * Returns a major scale from a passed note
 * @param { String } note 
 * @returns { Array<String> }
 */
const getMajorScale = (note) => {
    return generateScale(note, 'T T S T T T S')
}

module.exports = { getMajorScale }