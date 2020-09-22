<template>
<table>
    <caption class="scale-name unselectable">{{scaleName}}</caption>
    <tr>
        <td v-for="actualNote in scale" :key="actualNote">
            <NoteCard :note="actualNote" />
        </td>
    </tr>
</table>
</template>

<script>
import NoteCard from "./NoteCard";
export default {
    props: {
        scaleName: String,
        scale: Array,
        color: String,
    },
    mounted: function () {
        console.log(this.color);
    },
    components: {
        NoteCard,
    },
};
</script>

<style scoped>
table {
    margin-bottom: 30px;
}

.scale-name {
    font-family: 'Roboto', sans-serif;
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
    background: #ffffff;
}

td {
    width: 1%;
}

.columns {
    border-radius: 22px !important;
}
</style>
