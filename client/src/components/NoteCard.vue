<template>
<span class="note-card unselectable" v-bind:style="{ background: getColor(note) }">{{note}}</span>
</template>

<script>
export default {
    props: {
        note: String,
    },
    methods: {
        getColor: function (key) {
            const colors = {
                'c': "#9de24f",
                'c#': "#70a337",
                'd': '#ffbd55',
                'd#': '#d6a353',
                'e': '#5f9ec5',
                'f': '#f86565',
                'f#': '#b14444',
                'g': '#d6a353',
                'g#': '#dcc930',
                'a': '#d88de4',
                'a#': '#9d54a9',
                'b': '#3e58bb'

            };
            return colors[key.toLowerCase()];
        },
    },
};
</script>

<style lang="scss" scoped>
.c-note {
    background: blue;
}

.note-card {
    box-shadow: 0px 0px 30px black;
    padding: 19px;
    color: #ffffff;
    font-weight: bold;
    text-shadow: 0px 0px 3px black;

    transition: all 0.1s ease;

    &:hover {
        padding: 25px;
    }
}
</style>
