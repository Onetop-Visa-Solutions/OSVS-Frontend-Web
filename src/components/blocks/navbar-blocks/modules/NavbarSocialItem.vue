<script setup lang="ts">
export interface NavbarSocialItemProps {
  icon: string
  label: string
  link: string
}

const props = defineProps<NavbarSocialItemProps>()
</script>

<template>
  <a
    :href="props.link"
    target="_blank"
    class="social-item is-scrolled px-2"
  >
    <span class="icon">
      <i
        class="iconify"
        :data-icon="props.icon"
      />
      <span class="is-sr-only">{{ props.label }}</span>
    </span>
  </a>
</template>

<style scoped lang="scss">
.social-item {
  color: var(--navbar-link-color-inverted);
  transition: color 0.3s;

  &:hover {
    color: var(--primary);
  }
}

.is-inverted {
  .social-item {
    color: var(--navbar-link-color-inverted);

    &:hover {
      color: var(--primary);
    }
  }

  &.is-scrolled {
      .social-item {
        color: var(--navbar-link-color-medium);
      }
    }
}
</style>
