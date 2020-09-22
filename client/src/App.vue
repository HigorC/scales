<template>
<div class="container">
    <div class="header">
        I want to see the scales of&nbsp;
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
        </div>&nbsp;key
    </div>
    <div class="columns is-centered">
        <div class="column is-8">
            <div v-for="scale in scales" :key="scale.scale">
                <Scale :scale="scale.scale" :scaleName="scale.name" :color="scale.color" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Scale from "./components/Scale";
import api from "./utils/api";

export default {
    name: "App",
    data() {
        return {
            keySelected: "C",
            scales: {},
        };
    },
    mounted() {
        setTimeout(this.getScale, 300);
    },
    methods: {
        getScale: function () {
            api.getScales(this.keySelected).then((data) => {
                Object.assign(this.scales, data);
            });
        },
    },
    components: {
        Scale,
    },
};
</script>

<style lang="scss" scoped>
.header {
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
}
</style>
