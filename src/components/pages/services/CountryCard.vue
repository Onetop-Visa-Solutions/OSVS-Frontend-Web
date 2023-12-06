<template>
  <!--Grid item-->
  <div
    v-for="item in props.country"
    :key="item.slug"
  >
    <div class="hero-box-grid">
      <!--Grid item-->
      <div class="hero-box-item">
        <div class="box-inner">
          <IconBox
            color="primary"
            size="medium"
            rounded
          >
            <i-ion-flag-outline />
          </IconBox>
          <Title
            tag="h3"
            :size="7"
            weight="semi"
            leading
          >
            {{ item.name }}
          </Title>
          <div class="go-icon">
            <RouterLink
              :to="{
                name: 'education-destinations-slug',
                params: { slug: item.slug },
              }"
            >
              <i-ion-arrow-forward-outline />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface ProductCardProps {
  country: any
  flat?: boolean
}
const props = withDefaults(defineProps<ProductCardProps>(), {
  flat: false,
})
</script>

<style scoped>

.hero-inner {
  padding-top: 2.5rem;

  .hero-caption {
    max-width: 480px;
  }
}

.hero-box-grid {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
  padding-top: 1.5rem;
  max-width: 580px;

  .hero-box-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(33.3% - 1rem);
    text-align: center;
    margin: 0.5rem;
    padding: 1.5rem 1rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.85rem;
    box-shadow: var(--spread-shadow);
    cursor: pointer;

    :deep(.icon-box) {
      margin: 0 auto 0.5rem;
    }

    .go-icon {
      font-size: 0.9rem;
      color: var(--primary);
    }
  }
}

.hero-image-container {
  position: relative;

  img {
    position: relative;
    display: block;
    max-width: 400px;
    margin-left: auto;
    z-index: 1;
  }

  .stat-card {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 1rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.9rem;
    box-shadow: var(--spread-shadow);
    z-index: 2;

    .data {
      span {
        font-family: var(--font);
        display: block;

        &.metric {
          font-weight: 600;
          color: var(--title-color);
        }

        &.legend {
          color: var(--light-text);
          font-size: 0.7rem;
        }
      }
    }

    .graph {
      svg {
        width: 100%;
        max-width: 100px;
        stroke-dasharray: 406;
        stroke-dashoffset: 406;
        animation: dash 1s linear forwards;

        path {
          fill: none;
        }

        stroke: currentcolor;
        stroke-width: 5px;
      }
    }

    &.stat-card-1 {
      bottom: 50px;
      left: 0;
    }

    &.stat-card-2 {
      top: 50px;
      right: -80px;
    }
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (max-width: 767px) {
  .product-hero {
    text-align: center;
  }

  .hero-inner {
    .hero-caption {
      :deep(.title) {
        margin-top: 3rem;

        &.is-2 {
          font-size: 2rem;
        }
      }
    }
  }

  .hero-image-container {
    img {
      max-width: 100%;
    }

    .stat-card {
      &.stat-card-1 {
        left: -35px;
      }
    }
  }

  .hero-box-grid {
    max-width: 100%;

    .hero-box-item {
      width: calc(50% - 1rem);
      padding: 1rem;
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .product-hero {
    text-align: center;

    .buttons {
      justify-content: center;
    }

    .hero-image-container {
      img {
        margin: 0 auto;
      }

      .stat-card {
        &.stat-card-1 {
          left: 50px;
        }

        &.stat-card-2 {
          right: 50px;
        }
      }
    }
  }

  .hero-inner {
    .hero-caption {
      margin: 0 auto;

      :deep(.title) {
        margin-top: 3rem;
        font-size: 2.25rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 580px;
      }

      :deep(.subtitle) {
        margin-left: auto;
        margin-right: auto;
        max-width: 580px;
      }
    }
  }

  .hero-box-grid {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
