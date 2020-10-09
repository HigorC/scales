import { Synth, Sampler } from "tone";

// Centralize the instance of tone synths, samplers

const synth = new Synth().toDestination();
const sampler = new Sampler({
    urls: {
        "C4": "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

export { synth, sampler }