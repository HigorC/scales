<template>
  <span
    @click="play(actualNote.note)"
    class="note-card unselectable pointer"
    :data-tooltip="isMobile() ? null : actualNote.degree.name"
    v-bind:style="{ background: getColor(actualNote.note) }"
    >{{ removeDigits(actualNote.note) }}</span
  >
</template>

<script>
import { sampler } from "../utils/toneHelper";
import navigator from "../utils/navigator";

export default {
  props: {
    actualNote: Object,
  },
  created() {},
  methods: {
    isMobile: function () {
      return navigator.isMobile();
    },
    play: function (note) {
      sampler.triggerAttackRelease(`${note}`, "8n");
    },
    removeDigits: function (key) {
      return key && key.replaceAll(/\d/g, "");
    },
    getColor: function (key) {
      const colors = {
        c: "#9de24f",
        "c#": "#70a337",
        d: "#ffbd55",
        "d#": "#d6a353",
        e: "#5f9ec5",
        f: "#f86565",
        "f#": "#b14444",
        g: "#d6a353",
        "g#": "#dcc930",
        a: "#d88de4",
        "a#": "#9d54a9",
        b: "#3e58bb",
      };
      const normalizedKey = key && this.removeDigits(key).toLowerCase();
      return colors[normalizedKey];
    },
  },
};
</script>

<style lang="scss" scoped>
.c-note {
  background: blue;
}

.note-card {
  box-shadow: 0px 0px 8px #686868;
  padding: 19px;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 0px 0px 3px black;

  transition: all 0.1s ease;

  @media screen and (max-width: 600px) {
    padding: 10px 12px;
  }

  @media screen and (min-width: 600px) {
    &:hover {
      padding: 25px;
    }
  }
}
</style>
