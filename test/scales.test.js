const scales = require('../src/scales');
const scalesRules = require('../scaleRules.json')

describe('getAllScales function', () => {
    test('Mount all scales when no rule param is passed', () => {
        const allScales = scales.getAllScales('C')
        expect(Object.keys(allScales).length).toBe(scalesRules.length)
        expect(allScales[0].name).toBe(scalesRules[0].name)
        expect(allScales[allScales.length - 1].name).toBe(scalesRules[scalesRules.length - 1].name)
    })

    test('Mount a scale based on fake rule from C key', () => {
        const fakeRule = [{
            "name": "Escala Fake",
            "scale": "0 2 4 12"
        }]

        const expectedResult = [{
            "name": "Escala Fake",
            "scale": [
                {
                    "note": "C3",
                    "degree": {
                        "name": "Tônica/Primeira",
                        "degree": "1"
                    }
                },
                {
                    "note": "D3",
                    "degree": {
                        "name": "Segunda maior",
                        "degree": "3"
                    }
                },
                {
                    "note": "E3",
                    "degree": {
                        "name": "Terça maior",
                        "degree": "5"
                    }
                },
                {
                    "note": "C4",
                    "degree": {
                        "name": "Tônica/Primeira",
                        "degree": "1"
                    }
                }]
        }]

        expect(scales.getAllScales('C', fakeRule)).toEqual(expectedResult)
    });
})