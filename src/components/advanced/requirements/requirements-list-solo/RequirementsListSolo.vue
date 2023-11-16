<script setup lang="ts">
export interface RequirementsSoloCenteredProps {
  requirementsList: {
          title: string
          detail:{
            name: string
            content: string
          }[]
        }[],
}

const props = withDefaults(defineProps<RequirementsSoloCenteredProps>(), {
  requirementsList: () => [],

})
</script>

<template>
  <div class="requirement-solo">
    <div class="requirement-solo-content">
      <div class="requirement-solo-card">
        <div class="left">
          <div class="inner-features">
            <div
              v-for="(item, index) in props.requirementsList"
              :key="index"
              class="feature-item"
            >
              <i-cil-check-circle class="rem-125 text-primary mr-2" />
              <span class="paragraph">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.requirement-solo {
  position: relative;
  max-width: 780px;
  margin: 0 auto 3rem;

  .requirement-solo-content {
    .requirement-solo-card {
      display: flex;
      overflow: hidden;
      transition: box-shadow 0.3s;

      .left {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 2rem 0;
        margin-left: 0.8rem;

        .inner-features {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          .feature-item {
            display: flex;
            align-items: center;
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--title-color);
            width: 100%;

            &:not(:last-child) {
              margin-bottom: 0.75rem;
            }
          }
        }
      }

      //

      &:hover {
        box-shadow: var(--spread-shadow);
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media (max-width: 767px) {
  .requirement-solo {
    .requirement-solo-content {
      .requirement-solo-card {
        flex-direction: column;

        .left {
          width: 100%;
          padding-bottom: 2rem;

          .inner-features {
            .feature-item {
              width: 100%;
            }
          }
        }

        .right {
          width: 100%;
          border-left: none;
          border-top: 1px solid var(--card-border-color);
          padding-left: 0;
          padding-top: 2rem;
        }
      }
    }
  }
}
</style>
