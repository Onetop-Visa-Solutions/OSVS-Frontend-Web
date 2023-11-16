<script setup lang="ts">
export type CardShape = 'straight' | 'squared' | 'curved'

export interface GalleryProps {
  padding?: string
  shape?: CardShape
  shadow?: boolean
  muted?: boolean
  overflow?: boolean
  animated?: boolean
}

import { ref } from 'vue'

const items = ref([
  { size: 8 },
  { size: 4 },
  { size: 4 },
  { size: 4 },
  { size: 4 },
])

function getColumnSize(index: number): string {
  return `is-${items.value[index].size}`
}
</script>

<template>
  <div>
    <PageTitle
      class="text-primary text"
      title="Visa consulting that delivers results."
    />
    <div class="columns is-multiline is-mobile">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="column"
        :class="getColumnSize(index)"
      >
        <div class="grid-item">
          <!-- <img src="" alt=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  gap: 1rem;
}

.grid-item {
  height: 350px;
  width: 100%;
  border-radius: 10px;
  background-color: aqua;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
