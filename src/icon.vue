<template>
    <svg class="g-icon" aria-hidden="true">
        <use :xlink:href="`#icon-erp-cross-${name}`"></use>
    </svg>
</template>
<script>
export default {
    props: {
        name: String
    }
}
</script>
<style lang="scss">
.g-icon {
    width: 1em;
    height: 1em;
}
</style>