<template>
  <table>
    <caption class="scale-name unselectable">
      <span
        :data-tooltip="isMobile() ? null : 'Tocar escala'"
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
      <td v-for="actualNote in scale" :key="actualNote">
        <NoteCard :actualNote="actualNote" :noteBeingPlayed="noteBeingPlayed">
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

      // Change button color
      const currentTarget = event.currentTarget;
      currentTarget.style.color = "#4da950";
      setTimeout(function () {
        currentTarget.style.color = "#646464";
      }, seconds * 1000);
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
  font-size: 24px;
  background: none;
  color: #646464;
  padding: 0;

  @media screen and (min-width: 600px) {
    &:hover {
      color: #4da950;
    }
  }
}

table {
  margin-bottom: 60px;
}

.scale-name {
  font-family: "Roboto", sans-serif;
  margin: 27px 0 10px 0;
  padding-bottom: 4px;
  font-weight: bold;
  font-size: 25px;
  color: #686868;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
  @media screen and (min-width: 600px) {
    text-align: left;
    margin-left: 20px;
  }
}

.column {
  border: 2px solid white;
  border-top: none;
  border-bottom: none;
}

tr {
  background: #a6a6a6;
  box-shadow: 0px 0px 5px #b1b1b1;

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
