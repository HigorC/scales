const scalesUtils = require('../src/utils')

describe('getNotesWithOctaves function', () => {
    test('Should mount a default array of notes when no parameter is passed', () => {
        const expectedResult = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
            'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
            'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5']
        expect(scalesUtils.getNotesWithOctaves()).toEqual(expectedResult)
    })

    test('Should mount a array with just one octave', () => {
        const expectedResult = ['C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A1', 'A#1', 'B1']
        expect(scalesUtils.getNotesWithOctaves(1, 1)).toEqual(expectedResult)
    })
})

describe('getDegree function', () => {
    test('calculate the correct degree betwen notes', () => {
        expect(scalesUtils.getDegree('C', 'F')).toEqual({
            name: 'Quarta justa',
            degree: '6'
        })
    })

    test('calculate the correct degree betwen notes when first is bigger then second', () => {
        expect(scalesUtils.getDegree('G', 'D')).toEqual(
            {
                name: 'Quinta justa',
                degree: '8'
            }
        )
    })
})
