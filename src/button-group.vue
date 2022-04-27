<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.g-button-group {
    display: inline-flex;
    vertical-align: middle;
    .g-button {
        &:not(first-child) {
            margin-left: -1px;
        }
        border-radius: 0;
        &:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        &:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
}
</style>