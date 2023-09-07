<script setup lang="ts">
import type { IconService } from '/@src/types'

export type ServiceBlockAlign = 'centered'
export type ServiceBlockSize = 'small' | 'medium'

export interface FeatureBlockAProps {
  alignment?: ServiceBlockAlign
  services: IconService[]
  columns?: number
  limit?: number
  size?: ServiceBlockSize
  rounded?: boolean
  links?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<ServiceBlockAProps>(), {
  alignment: undefined,
  columns: 4,
  limit: 6,
  size: undefined,
  rounded: false,
  links: false,
  inverted: false,
})

const blockClasses = computed(() => [props.alignment && `has-text-centered`])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])

const textClasses = computed(() => [
  props.alignment === 'centered' && 'mx-auto',
  props.size === 'small' && 'rem-90',
  props.columns != 6 && 'max-w-3',
  props.columns === 6 && 'max-w-4',
  props.columns === 3 && 'rem-90',
  props.inverted && 'text-light',
])
</script>

<template>
  <div class="py-6">
    <div
      class="columns is-multiline b-columns-half-tablet-p"
      :class="blockClasses"
    >
      <div
        v-for="(service, index) in props.services.slice(0, props.limit)"
        :key="index"
        class="column"
        :class="columnClasses"
      >
        <div class="py-4">
          <slot
            name="column"
            :service="service"
            :index="index"
          >
            <IconBox
              :color="service.color"
              :size="props.size"
              :rounded="props.rounded"
              :inverted="props.inverted"
            >
              <i
                class="iconify"
                :data-icon="service.icon"
              />
            </IconBox>
            <Title
              tag="h3"
              :size="6"
              weight="semi"
              leading
              :inverted="props.inverted"
            >
              <span>{{ service.title }}</span>
            </Title>
            <p
              class="paragraph"
              :class="textClasses"
            >
              {{ service.text }}
            </p>
            <ActionLink
              v-if="props.links"
              :link="service.link"
              size="small"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.has-text-centered {
  :deep(.icon-box) {
    margin: 0 auto 0.75rem;
  }

  .service-link {
    justify-content: center;
  }
}

:deep(.icon-box) {
  margin-bottom: 0.75rem;
}
</style>
