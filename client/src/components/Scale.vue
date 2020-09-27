<template>
<table>
    <caption class="scale-name unselectable">
        {{
        scaleName
      }}
    </caption>
    <tr>
        <td>
            <span class="play-all pointer" @click="playAll()">
                <i class="fas fa-play-circle"></i>
            </span>
        </td>
        <td v-for="actualNote in scale" :key="actualNote">
             <NoteCard :actualNote="actualNote" />
        </td>
    </tr>
</table>
</template>

<script>
import NoteCard from "./NoteCard";
import {
    Synth,
    now as toneNow
} from "tone";

const synth = new Synth().toDestination();

export default {
    props: {
        scaleName: String,
        scale: Array,
        color: String,
    },
    methods: {
        playAll: function () {
            const now = toneNow();
            let seconds = 0;

            this.scale.forEach((noteScale) => {
                synth.triggerAttackRelease(noteScale.note, "8n", now + seconds);
                seconds += 0.5;
            });
        },
    },
    components: {
        NoteCard,
    },
};
</script>

<style lang="scss" scoped>
.play-all {
    font-size: 35px;
    border-radius: 50%;
    padding: 20px;
    background: #414141;
    box-shadow: 0px 0px 5px #c6c6c6;
    color: #4da950;
    transition: all 0.1s ease;

    &:hover {
        padding: 25px;
    }
}

table {
    margin-bottom: 30px;
}

.scale-name {
    font-family: "Roboto", sans-serif;
    margin: 27px 0 10px 0;
    padding-bottom: 4px;
    font-weight: bold;
    font-size: 25px;
    text-align: right;
    color: #686868;
}

.column {
    border: 2px solid white;
    border-top: none;
    border-bottom: none;
}

tr {
    background: #a6a6a6;
}

td {
    width: 1%;
}

.columns {
    border-radius: 22px !important;
}
</style>
