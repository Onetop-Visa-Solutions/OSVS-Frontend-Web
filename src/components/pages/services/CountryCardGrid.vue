<template>
  <div class="mt-12">
    <div
      v-for="(item, index) in props.content"
      :key="index"
    >
      <CountryCard :country="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface ProductCardProps {
  content: any
  flat?: boolean
}
const props = withDefaults(defineProps<ProductCardProps>(), {
  flat: false,
})
</script>
