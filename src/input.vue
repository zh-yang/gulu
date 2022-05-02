<template>
<div class="warpper" :class="{error: error}">
    <input
        @change="$emit('change', $event)"
        @focus="$emit('chanfocusge', $event)"
        @blur="$emit('blur', $event)"
        @input="$emit('input', $event)"
    :value="value" :disabled="disabled" :readonly="readonly" type="text">
    <template v-if="error">
        <icon class="icon-error" name="icon_anomaly_red_16"></icon>
        <span class="error-message">{{error}}</span>
    </template>
</div>
</template>
<script>
import Icon from "./icon";

export default {
    name: "GuluInput",
    props: {
        value: {},
        disabled: Boolean,
        readonly: Boolean,
        error: String
    },
    components: {Icon}
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0,0,0,0.5);
$red: #F1453D;
.warpper {
    display: inline-flex;
    align-items: center;
    font-size: $font-size;
    > input {
        height: $height;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0 8px;
        &:hover {
            border-color: $border-color-hover;
        }
        &:focus {
            box-shadow: inset 0 1px 3px $box-shadow-color;
            outline: none;
        }
        &[disabled], &[readonly] {
            border-color: #aaa;
            color: #aaa;
            cursor: not-allowed;
        }
    }
    &.error {
        >input {
            border-color: $red;
        }
    }
    .icon-error {
        margin-left: 8px;
        margin-right: 4px;
    }
    .error-message {
        color: $red;
    }
}
</style>