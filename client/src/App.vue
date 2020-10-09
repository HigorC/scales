<template>
  <div id="app-body">
    <div class="columns inputs">
      <div class="column is-3 is-offset-1 app-name">
        <h1>Gerador de Escalas</h1>
      </div>
      <div class="column is-3">
        Ver escalas da nota &nbsp;
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
      <div class="column is-5">
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
    <div class="columns is-centered">
      <div class="column is-8">
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
    search: function (scaleName) {
        const scaleNameNormalized = scaleName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        const querySerachNormalized = this.querySearch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")

        return !querySerachNormalized || (querySerachNormalized && scaleNameNormalized.includes(querySerachNormalized));
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
</style>
