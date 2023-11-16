<script setup lang="ts">
export interface RequirementOption {
  requirementsContent: {title: string
        name: string
        requirementsList: {
          title: string
          detail:{
            name: string
            content: string
          }[]
        }[],
        description: string
      }[]
    }



const props = withDefaults(defineProps<RequirementOption>(), {
  requirementsContent: () => [],

})
const activeBox = ref(0)

</script>

<template>
  <div class="requirements-compact">
    <div class="requirements-compact-box">
      <div
        v-for="(item, p) in props.requirementsContent"
        :key="p"
        role="button"
        tabindex="0"
        class="requirements-inner-box"
        :class="activeBox === p && 'is-active'"
        @mouseover="() => (activeBox = p)"
        @focusin="() => (activeBox = p)"
      >
        <Title
          tag="h3"
          :size="5"
          weight="semi"
        >
          <span>{{ item.title }}</span>
        </Title>
        <p class="paragraph rem-80 mx-auto max-w-2">
          {{ item.description }}
        </p>
        <!-- <p>{{ }}</p> -->
        <RequirementsListSolo :requirements-list="item.requirementsList" />

        <div class="action">
          <Button
            color="primary"
            outlined
            bold
            fullwidth
            raised
          >
            <span>Learn More</span>
          </Button>
        </div>
      </div>
      <div
        v-background="{
          src: '/assets/shapes/lowpoly-pattern-blue.jpg',
          placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
        }"
        class="naver-box"
        :class="`naver-${activeBox}`"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.requirements-compact {
  position: relative;
  margin-bottom: 3rem;


  .requirements-compact-box {
    position: relative;
    display: flex;
    width: 100%;
    // background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1.25rem;
    box-shadow: var(--spread-shadow);
    padding-left: 1.5rem;


    .naver-box {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 33%;
      // background: var(--dark-bg);
    background: brown;
    margin-left: 2rem;
      border-radius: 0.85rem;
      background-size: cover;
      z-index: 1;
      transition: margin 0.3s, width 0.3s;

      &.naver-0 {
        margin-left: 3%;
        width: 29%;
      }

      &.naver-1 {
        margin-left: 32.4%;
      }

      &.naver-2 {
        margin-left: 64.5%;
      }
    }

    .requirements-inner-box {
      position: relative;
      padding: 1.5rem;
      text-align: center;
    // background: yellow;
      width: 33%;
      z-index: 2;

      :deep(.title) {
        transition: color 0.3s;
      }

      .price {
        padding: 1rem 0 0.75rem;

        span {
          position: relative;
          left: -10px;
          font-family: var(--font);
          font-size: 3.25rem;
          font-weight: 600;
          color: var(--title-color);
          transition: color 0.3s;

          &::before {
            position: relative;
            top: -25px;
            content: '$';
            font-weight: 700;
            font-size: 1.25rem;
            margin-right: 0;
          }
        }
      }

      .billing {
        margin-bottom: 1rem;
      }

      .action {
        margin-bottom: 2rem;
      }

      &:first-child {
        width: 31%;
      }

      &.is-active {
        :deep(.title) {
          color: var(--white-smoke);
        }

        .price {
          span {
            color: var(--white-smoke);
          }
        }
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (max-width: 767px) {
  .requirements-compact {
    .requirements-compact-box {
      flex-direction: column;

      .naver-box {
        display: none;
      }

      .requirements-inner-box {
        width: 100% !important;

        &.is-active {
          :deep(.title) {
            color: var(--title-color);
          }

          .price {
            span {
              color: var(--title-color);
            }
          }
        }
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .requirements-compact {
    .requirements-compact-box {
      flex-wrap: wrap;

      .naver-box {
        display: none;
      }

      .requirements-inner-box {
        width: 50% !important;

        &.is-active {
          :deep(.title) {
            color: var(--title-color);
          }

          .price {
            span {
              color: var(--title-color);
            }
          }
        }
      }
    }
  }
}

</style>
