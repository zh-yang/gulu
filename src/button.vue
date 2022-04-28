<template>
    <button class="g-button" @click="$emit('click')" :class="{[`icon-${iconPosition}`]: true}">
        <g-icon class="icon" v-if="icon && !loading" :name="icon" />
        <g-icon class="loading icon" v-if="loading" name="icon_syn_gray_16" />
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    props: {
        icon: String,
        iconPosition: {
            type: String,
            default: "left",
            validator(value) {
                return ["left", "right"].includes(value);
            }
        },
        loading: Boolean
    }
}
</script>
<style lang="scss">
@keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}

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
    cursor: pointer;
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
    .loading {
        animation: spin 2s infinite linear;
    }
}
</style>