<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import {computed} from 'vue'

export interface ContentBlockAProps {
  title: string
  alias: string
  text: string
  link?: RouteLocationRaw
  linkLabel?: string
  images: {name: string, icon: string, link:string}[]
  squared?: boolean
  inverted?: boolean
  institutionsDescription: string
}

const props = withDefaults(defineProps<ContentBlockAProps>(), {
  link: undefined,
  linkLabel: 'Learn More',
  squared: false,
  inverted: false,
})

const textClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="py-6 mx-auto max-w-8">
    <div class="columns is-vcentered b-columns-half-tablet-p">
      <div class="column is-6">
        <slot name="content">
          <Title
            tag="h3"
            :size="5"
            weight="semi"
            leading
            :inverted="props.inverted"
          >
            <span>{{ props.title }} {{ props.alias }}</span>
          </Title>
          <p
            class="paragraph rem-95 small:text-centered"
            :class="textClasses"
          >
            {{ props.institutionsDescription }}
          </p>
        </slot>
      </div>
      <div class="column is-6">
        <slot name="images">
          <div
            class="mx-auto is-flex is-justify-content-center is-flex-wrap-wrap"
          >
            <div
              v-for="(image, index) in props.images"
              :key="index"
              class="image-wrap"
            >
              <!-- <RouterLink
                :to="image.link
                "
              > -->
              <AvatarSimple
                :picture="image.icon"
                :squared="props.squared"
              />
              <!-- </RouterLink> -->
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  width: calc(20% - 1rem);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
