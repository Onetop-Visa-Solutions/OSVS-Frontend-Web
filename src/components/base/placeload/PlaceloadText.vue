<script setup lang="ts">
import { CssUnitRe } from '/@src/utils/regex'

export type PlaceloadTextProps = {
  width?: string
  height?: string
  mobileWidth?: string
  mobileHeight?: string
  disabled?: boolean
  centered?: boolean
}

const props = withDefaults(defineProps<PlaceloadTextProps>(), {
  width: '100%',
  height: '10px',
  mobileWidth: undefined,
  mobileHeight: undefined,
})
const mobileWidthValue = props.mobileWidth ?? props.width
const mobileHeightValue = props.mobileHeight ?? props.height

if (props.width.match(CssUnitRe) === null) {
  console.warn(
    `VPlaceload: invalid "${props.width}" width. Should be a valid css unit value.`,
  )
}
if (props.height.match(CssUnitRe) === null) {
  console.warn(
    `VPlaceload: invalid "${props.height}" height. Should be a valid css unit value.`,
  )
}
if (mobileWidthValue.match(CssUnitRe) === null) {
  console.warn(
    `VPlaceload: invalid "${mobileWidthValue}" mobileWidth. Should be a valid css unit value.`,
  )
}
if (mobileHeightValue.match(CssUnitRe) === null) {
  console.warn(
    `VPlaceload: invalid "${mobileHeightValue}" mobileHeight. Should be a valid css unit value.`,
  )
}
</script>

<template>
  <div
    class="content-shape"
    :class="[props.centered && 'is-centered', !props.disabled && 'loads']"
  />
</template>

<style scoped>
.content-shape {
  width: v-bind('props.width');
  height: v-bind(height);
}
</style>
