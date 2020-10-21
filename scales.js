const scaleUtils = require('./scaleUtils')
const scalesRules = require('./scaleRules.json')
const notes = scaleUtils.getNotesWithOctaves() || []

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

    const indexActualNote = notes.findIndex(noteInteraction => noteInteraction.includes(note.toUpperCase()))

    const scale = []

    ruleSplited.forEach(noteIndex => {
        let realIndex = Number(noteIndex) + indexActualNote
        scale.push({
            note: notes[realIndex],
            degree: scaleUtils.getDegree(notes[indexActualNote], notes[realIndex])
        })
    })

    return scale
}

/**
 * Returns all registred scales
 * @param { String } note 
 * @returns { Array<Object> }
 */
const getAllScales = (note) => {
    const allScales = []
    scalesRules.forEach(rule => {
        allScales.push({
            name: rule.name,
            scale: generateScale(note, rule.scale)
        })
    })
    return allScales
}

module.exports = {
    getAllScales
}