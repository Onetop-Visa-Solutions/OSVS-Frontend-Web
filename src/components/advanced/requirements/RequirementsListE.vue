<script setup lang="ts">
export interface RequirementProps {
  title: string
  name: string
  requirementsList: {
    title: string
    detail:{
      name:string
      content:string}[]
  }[]
  description: string

}

const props = withDefaults(defineProps<RequirementProps>(), {
  requirementsList: () => [],

})

const activePricing = ref('requirement')
</script>

<template>
  <div class="requirements-list">
    <div class="requirements-list-head">
      <div class="option-selector">
        <div class="option-selector-inner">
          <button
            :class="activePricing === 'requirement' && 'is-active'"
            @click="activePricing = 'requirement'"
          >
            Requirements
          </button>
          <button
            :class="activePricing === 'funding' && 'is-active'"
            @click="activePricing = 'funding'"
          >
            Scholarship and funding
          </button>
          <div class="naver" />
        </div>
      </div>
    </div>
    <div
      v-if="activePricing === 'requirement'"
    >
      <RequirementsTabbed
        :requirements="props.requirementsList"
      />
    </div>
    <div v-else>
      Scholarship and Funding
    </div>
  </div>
</template>

<style scoped lang="scss">
.requirements-list {
  position: relative;
  max-width: 940px;
  margin: 0 auto;

  .requirements-list-head {
    margin-bottom: 2rem;

    .option-selector {
      max-width: 400px;
      margin: 0 auto;

      .option-selector-inner {
        position: relative;
        width: 100%;
        display: flex;
        border: 1px solid var(--input-base-border-color);
        border-radius: 50rem;

        button {
          position: relative;
          font-size: 1rem;
          font-family: var(--font);
          color: var(--light-text);
          padding: 0;
          border: none;
          background: none;
          width: 50%;
          min-height: 50px;
          z-index: 1;
          cursor: pointer;

          &.is-active {
            color: var(--title-color);

            &:first-child ~ .naver {
              margin-left: 0;
            }

            &:nth-child(2) ~ .naver {
              margin-left: 50%;
            }
          }
        }

        .naver {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 50%;
          margin-left: 0;
          border-radius: 50rem;
          background: var(--card-bg-color);
          box-shadow: var(--spread-shadow);
          pointer-events: none;
          z-index: 0;
          transition: margin 0.3s ease-in-out;
        }
      }
    }
  }

  .requirements-list-content {
    .requirements-list-card {
      display: flex;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 1rem;
      padding: 3rem;
      transition: box-shadow 0.3s;

      .left {
        width: 70%;

        .inner-features {
          display: flex;
          flex-wrap: wrap;
          margin-top: 2.5rem;

          .feature-item {
            font-family: var(--font);
            font-size: 0.95rem;
            color: var(--medium-text);
            width: 50%;

            &:not(:last-child) {
              margin-bottom: 0.75rem;
            }
          }
        }
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        padding-left: 3rem;
        border-left: 1px solid var(--card-border-color);
        text-align: center;

        > div {
          width: 100%;
        }

        .price {
          .price-value {
            position: relative;
            left: -12px;
            font-family: var(--font);
            font-weight: 300;
            font-size: 5.75rem;
            color: var(--title-color);
            line-height: 1;

            span::before {
              position: relative;
              top: -50px;
              content: '$';
              font-weight: 500;
              font-size: 1.5rem;
            }
          }
        }

        .action {
          margin-top: 2rem;
        }
      }

      &:hover {
        box-shadow: var(--spread-shadow);
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media (max-width: 767px) {
  .requirements-list {
    .requirements-list-content {
      .requirements-list-card {
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
