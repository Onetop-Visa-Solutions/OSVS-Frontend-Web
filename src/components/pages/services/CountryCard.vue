<template>
  <!--Grid item-->
  <div class="hero-box-item">
    <div class="box-inner">
      <IconBox
        color="primary"
        rounded
      >
        <i-ion-medkit-outline />
      </IconBox>
      <Title
        tag="h3"
        :size="7"
        weight="semi"
        narrow
      >
        {{ props.content }}
      </Title>
      <div
        class="go-icon"
      >
        <RouterLink
          :to="{
            name: 'education-destinations-slug',
            params: { slug: props.content },
          }"
        >
          <Button>
            <i-ion-arrow-forward-outline />
          </Button>
        </RouterLink>
      </div>
    </div>
  </div><div class="hero-box-item">
    <div class="box-inner">
      <IconBox
        color="primary"
        rounded
      >
        <i-ion-medkit-outline />
      </IconBox>
      <Title
        tag="h3"
        :size="7"
        weight="semi"
        narrow
      >
        Italy
      </Title>
      <div
        class="go-icon"
      >
        <Button to="#">
          <i-ion-arrow-forward-outline />
        </Button>
      </div>
    </div>
  </div><div class="hero-box-item">
    <div class="box-inner">
      <IconBox
        color="primary"
        rounded
      >
        <i-ion-medkit-outline />
      </IconBox>
      <Title
        tag="h3"
        :size="7"
        weight="semi"
        narrow
      >
        Italy
      </Title>
      <div
        class="go-icon"
      >
        <Button to="#">
          <i-ion-arrow-forward-outline />
        </Button>
      </div>
    </div>
  </div><div class="hero-box-item">
    <div class="box-inner">
      <IconBox
        color="primary"
        rounded
      >
        <i-ion-medkit-outline />
      </IconBox>
      <Title
        tag="h3"
        :size="7"
        weight="semi"
        narrow
      >
        United States
      </Title>
      <div
        class="go-icon"
      >
        <Button to="#">
          <i-ion-arrow-forward-outline />
        </Button>
      </div>
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

<style scoped>
.hero-box-item {
    display: flex;
    align-items: center;
    width: calc(50% - 1rem);
    text-align: center;
    margin: 0.5rem;
    padding: 0.5rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.85rem;
    box-shadow: var(--spread-shadow);
    cursor: pointer;

    .box-inner {
      display: flex;
      align-items: center;
      width: 100%;
    }

    :deep(.icon-box) {
      margin-right: 0.75rem;
    }

    .go-icon {
      margin-left: auto;
      font-size: 0.9rem;
      color: var(--primary);
    }
  }


/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (max-width: 767px) {
    .hero-box-item {
      width: calc(100% - 1rem);
      padding: 1rem;
    }
}

</style>
