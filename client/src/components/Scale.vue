<template>
  <table>
    <caption class="scale-name unselectable">
      <span
        v-if="isMobile()"
        class="play-all pointer"
        @click="playAll($event)"
      >
        <i class="fas fa-play-circle"></i>
      </span>
      {{
        scaleName
      }}
    </caption>
    <tr>
      <td v-if="!isMobile()">
        <span
          class="play-all pointer"
          data-tooltip="Tocar esta escala"
          @click="playAll($event)"
        >
          <i class="fas fa-play-circle"></i>
        </span>
      </td>
      <td v-for="actualNote in scale" :key="actualNote">
        <NoteCard :actualNote="actualNote" :noteBeingPlayed="noteBeingPlayed">
          <span v-show="actualNote == noteBeingPlayed"> testes 123 </span>
        </NoteCard>
      </td>
    </tr>
  </table>
</template>

<script>
import NoteCard from "./NoteCard";
import { now as toneNow } from "tone";
import { sampler } from "../utils/toneHelper";
import navigator from "../utils/navigator";

export default {
  data() {
    return {
      noteBeingPlayed: "",
    };
  },
  props: {
    scaleName: String,
    scale: Array,
    color: String,
  },
  methods: {
    isMobile: function () {
      return navigator.isMobile();
    },
    playAll: function (event) {
      const now = toneNow();
      let seconds = 0;

      this.scale.forEach((noteScale) => {
        this.noteBeingPlayed = noteScale.note;
        sampler.triggerAttackRelease(noteScale.note, "8n", now + seconds);
        seconds += 0.4;
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
  color: #4da950;
  transition: all 0.1s ease;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    background: none;
    color: #646464;
    padding: 0;
  }

  @media screen and (min-width: 600px) {
    &:hover {
      padding: 25px;
    }
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
  border-bottom: 5px solid;

  @media screen and (max-width: 600px) {
    height: 45px;
  }
}

td {
  width: 1%;
}

.columns {
  border-radius: 22px !important;
}
</style>
