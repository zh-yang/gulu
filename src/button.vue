<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <g-icon class="icon" v-if="icon" :name="icon" />
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    props: {
        icon: {},
        iconPosition: {
            type: String,
            default: "left",
            validator(value) {
                return ["left", "right"].includes(value);
            }
        }
    }
}
</script>
<style lang="scss">
.g-button {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
        border-color:var(--border-color-hover);
    }
    &:active {
        background-color: var(--button-active-bg);
    }
    &:focus {
        outline: none;
    }
    > .icon {
        order: 1;
        margin-right: .1em;
    }
    > .content {
        order: 2;
    }
    &.icon-right {
        > .icon {
            order: 2;
            margin-right: 0;
            margin-left: .1em;
        }
        > .content {
            order: 1;
        }
    }
}
</style>