<template>
  <div id="app-body"  :class="{ 'low-opacity': !requestDone }">
    <div class="columns is-mobile inputs">
      <div class="column is-3-desktop is-8-mobile is-offset-1 app-name">
        <h1>Escalator</h1>
      </div>
      <div class="column is-4-desktop is-3-mobile">
        <span v-if="!isMobile()"> Ver escalas da nota &nbsp; </span>
        <div class="select is-rounded">
          <select v-model="keySelected" @change="getScale()">
            <option>C</option>
            <option value="C#">C#/Db</option>
            <option>D</option>
            <option value="D#">D#/Eb</option>
            <option>E</option>
            <option>F</option>
            <option value="F#">F#/Gb</option>
            <option>G</option>
            <option value="G#">G#/Ab</option>
            <option>A</option>
            <option value="A#">A#/Bb</option>
            <option>B</option>
          </select>
        </div>
      </div>
      <div v-if="!isMobile()" class="column is-5-desktop">
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Procure uma escala aqui"
              v-model="querySearch"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-mobile is-centered">
      <div class="column is-8-desktop is-11-mobile scales">
        <div v-for="scale in scales" :key="scale.scale">
          <div class="scale-container">
            <Scale
              v-show="search(scale.name)"
              :scale="scale.scale"
              :scaleName="scale.name"
              :color="scale.color"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-show="!requestDone" class="spinner"></div>
  <Footer />
</template>

<script>
import Scale from "./components/Scale";
import Footer from "./components/Footer";
import api from "./utils/api";
import navigator from "./utils/navigator";

export default {
  name: "App",
  data() {
    return {
      keySelected: "C",
      querySearch: "",
      scales: {},
      requestDone: true,
    };
  },
  mounted() {
    setTimeout(this.getScale, 300);
  },
  methods: {
    isMobile: function () {
      return navigator.isMobile();
    },
    search: function (scaleName) {
      const scaleNameNormalized = scaleName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const querySerachNormalized = this.querySearch
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return (
        !querySerachNormalized ||
        (querySerachNormalized &&
          scaleNameNormalized.includes(querySerachNormalized))
      );
    },
    getScale: function () {
      this.requestDone = false;
      api.getScales(this.keySelected).then((data) => {
        this.requestDone = true;
        Object.assign(this.scales, data);
      });
    },
  },
  components: {
    Scale,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.inputs {
  padding-top: 20px;
  border-bottom: 1px solid #ccc;
  .app-name h1 {
    color: #888888;
    font-size: 25px;
    font-weight: bold;
  }
  background: #ffffff;
  color: #686868;
  font-weight: bold;

  div {
    display: flex;
    align-items: center;
  }
}
@media screen and (max-width: 600px) {
  .scales {
    padding-right: 0;
  }
}

hr {
  margin-top: 0;
  background-color: #0000001c;
}

.spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.low-opacity {
  opacity: 0.5;
}
#app-body {
  transition: all 0.1s ease;
}
</style>
