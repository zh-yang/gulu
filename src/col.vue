<template>
<div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
</div>
</template>
<script>
export default {
    name: "GuluCol",
    props: {
        span: [Number, String],
        offset: [Number, String],
    },
    data() {
        return {
            gutter: undefined
        }
    },
    computed: {
        colStyle() {
            const {gutter} = this;
            return {
                paddingLeft: gutter/2 + 'px',
                paddingRight: gutter/2 + 'px'
            }
        },
        colClass() {
            const {span, offset} = this;
            return [
                span&&`col-${span}`,
                offset&&`offset-${offset}`
            ];
        }
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
    $class: offset-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            margin-left: $n/24 * 100%;
        }
    }
}
</style>