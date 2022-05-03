<template>
<div class="col" :class="[`col-${span}`]">
    <slot></slot>
</div>
</template>
<script>
export default {
    name: "GuluCol",
    props: {
        span: [Number, String]
    }
}
</script>
<style lang="scss" scoped>
.col {
    height: 32px;
    &:nth-child(even) {
        background: gray;
    }
    &:nth-child(odd) {
        background: pink;
    }
    $class: col-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            width: $n/24 * 100%;
        }
    }
}
</style>