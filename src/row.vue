<template>
<div class="row" :style="rowStyle">
    <slot></slot>
</div>
</template>
<script>
export default {
    name: "GuluRow",
    props: {
        gutter: [Number, String]
    },
    mounted() {
        this.$children.forEach(vm=>{
            vm.gutter = this.gutter;
        })
    },
    computed: {
        rowStyle() {
            const {gutter} = this;
            return {
                marginLeft: -gutter/2 + 'px',
                marginRight: -gutter/2 + 'px'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.row {
    display: flex;
}
</style>