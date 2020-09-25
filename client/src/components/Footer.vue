<template>
<div class="app-footer">
    <p>
        Made with
        <span>
            <i class="fas fa-heart"></i>
        </span>
        by
        <a target="_blank" href="https://www.github.com/higorc">HigorC</a>
    </p>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-footer {
    color: #ffffff;
    background-color: #000000;
    text-align: right;

    width: 100%;
    height: 27px;
    bottom: 0;
    left: 0;

    p {
        font-size: 11px;
        margin-right: 30px;

        a {
            color: #ffffff;
            text-decoration: none;

            &:hover {
                color: rgb(255, 70, 70);
            }
        }

        span {
            font-size: 12px;
        }

        svg {
            color: rgb(255, 70, 70);
        }
    }
}
</style>
