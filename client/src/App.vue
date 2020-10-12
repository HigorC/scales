<template>
  <div id="app-body">
    <div class="columns is-mobile inputs">
      <div class="column is-3-desktop is-8-mobile is-offset-1 app-name">
        <h1>Gerador de Escalas</h1>
      </div>
      <div class="column is-3-desktop is-3-mobile">
        <span v-if="!isMobile()"> Ver escalas da nota &nbsp; </span>
        <div class="select is-rounded">
          <select v-model="keySelected" @change="getScale()">
            <option>C</option>
            <option>C#</option>
            <option>D</option>
            <option>D#</option>
            <option>E</option>
            <option>F</option>
            <option>F#</option>
            <option>G</option>
            <option>G#</option>
            <option>A</option>
            <option>A#</option>
            <option>B</option>
          </select>
        </div>
      </div>
      <div v-if="!isMobile()" class="column is-6-desktop">
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

    <span v-if="isMobile()">
      <div class="columns is-mobile is-centered">
        <div class="column is-10">
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
    </span>

    <div class="columns is-mobile is-centered">
      <div class="column is-8-desktop is-12-mobile scales">
        <div v-for="scale in scales" :key="scale.scale">
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
      api.getScales(this.keySelected).then((data) => {
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
</style>
