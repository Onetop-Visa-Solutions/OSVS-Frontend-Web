<script setup lang="ts">
export interface RequirementOption {
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


export interface RequirementTabbedProps {
  requirements: RequirementOption[]
}

const props = withDefaults(defineProps<RequirementTabbedProps>(), {
  requirements: () => [],

})
const activeBox = ref(0)

</script>

<template>
  <!-- <div class="requirement-wrapper">

    <div class="requirement-container">
      <div class="container-inner">
        <div class="solo-plans">
          Requirement
          <div
            v-for="(item, p) in props.requirements"
            :key="p"
            class="solo-plan"
          >
            <div class="header">
              <img
                :src="item.name"
                alt="Services icon"
              >
              <span>{{ item.title }}</span>
            </div>

            <div class="plan-tagline">
              <p>
                {{ item.title }}
              </p>
            </div>

            <div class="benefits content">
              <ul>
                <li
                  v-for="(det, k) in item.requirementsList"
                  :key="k"
                >
                  {{ det.title }}
                </li>
              </ul>
            </div>
            <div class="button-wrap">
              <Button
                to="/"
                color="primary"
                fullwidth
                bold
                raised
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->


  <!-- TWO -->
  <div class="pricing-compact">
    <div class="pricing-compact-box">
      <div
        v-for="(item, p) in props.requirements"
        :key="p"
        role="button"
        tabindex="0"
        class="pricing-inner-box"
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
          {{ item.title }}
        </p>
        <!-- <div class="price">
        <span v-if="billing.length > 0">{{ plan.yearlyPrice }}</span>
        <span v-else>{{ plan.monthlyPrice }}</span>
      </div> -->
        <!-- <div class="billing">
        <p class="paragraph rem-80">
          per user, per
          <span v-if="billing.length > 0">year</span>
          <span v-else>month</span>
        </p>
        <p class="paragraph rem-80">
          when billed
          <span v-if="billing.length > 0">yearly</span>
          <span v-else>monthly</span>
        </p>
      </div> -->
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
          src: '/assets/shapes/lowpoly-pattern.png',
          placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
        }"
        class="naver-box"
        :class="`naver-${activeBox}`"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
// .requirement-wrapper {
//   margin-bottom: 3rem;

//   .requirement-tabs {
//     position: relative;
//     display: flex;
//     background: var(--wrap-muted-color);
//     border-radius: 100px;
//     margin-bottom: 40px;

//     .tab-item {
//       position: relative;
//       width: 25%;
//       height: 40px;
//       margin: 16px 0;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       border-right: 1px solid var(--wrap-border-color);
//       z-index: 1;

//       &.is-active,
//       + .is-active {
//         border-color: transparent;

//         span {
//           color: var(--title-color);
//         }

//         img {
//           filter: grayscale(0);
//           opacity: 1;
//         }
//       }

//       &.is-active {
//         &:first-child {
//           ~ .naver {
//             margin-left: 0;
//           }
//         }

//         &:nth-child(2) {
//           ~ .naver {
//             margin-left: 25%;
//           }
//         }

//         &:nth-child(3) {
//           ~ .naver {
//             margin-left: 50%;
//           }
//         }

//         &:nth-child(4) {
//           ~ .naver {
//             margin-left: 75%;
//           }
//         }
//       }

//       &:nth-child(4) {
//         border: none !important;
//       }

//       img {
//         display: block;
//         height: 28px;
//         width: 28px;
//         margin-right: 4px;
//         filter: grayscale(1);
//         opacity: 0.5;
//         transition: all 0.3s;
//       }

//       span {
//         display: block;
//         font-weight: 500;
//         color: var(--medium-text);
//         transition: color 0.3s;
//       }
//     }

//     .naver {
//       position: absolute;
//       top: 0;
//       left: 0;
//       height: 100%;
//       width: 25%;
//       border-radius: 100px;
//       background: var(--card-bg-color);
//       box-shadow: var(--spread-shadow);
//       margin: 0;
//       transition: all 0.4s ease-in-out;

//       .naver-inner {
//         position: relative;
//         height: 100%;
//         width: 100%;

//         .naver-naver {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           margin: 0 auto;
//           height: 4px;
//           width: 30px;
//           border-radius: 50px;
//           background: var(--primary);
//         }
//       }
//     }
//   }

//   .requirement-container {
//     // display: none;
//     animation: fadeIn 0.5s;
//     background: var(--card-bg-color);
//     border: 1px solid var(--card-border-color);
//     border-radius: 0.85rem;
//     animation-name: fadeInLeft;
//     animation-duration: 0.5s;
//     box-shadow: var(--spread-shadow);

//     &.is-active {
//       display: block;
//     }

//     .container-inner {
//       padding: 40px 0;

//       &.no-padding {
//         padding: 0;
//       }

//       .solo-plans {
//         display: flex;

//         .solo-plan {
//           min-height: 200px;
//           width: 33.3%;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           align-items: center;
//           padding: 0 40px;

//           &:nth-child(2) {
//             border-left: 1px solid var(--card-border-color);
//             border-right: 1px solid var(--card-border-color);
//           }

//           .header {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             width: 100%;

//             img {
//               display: block;
//               height: 40px;
//               width: 40px;
//               margin-right: 6px;
//             }

//             span {
//               display: block;
//               font-size: 1.4rem;
//               font-family: var(--font-alt);
//               color: var(--title-color);
//               transition: color 0.3s;
//             }
//           }

//           .price {
//             width: 100%;
//             text-align: center;
//             padding: 1rem 0;

//             .amount {
//               position: relative;
//               left: -8px;
//               font-family: var(--font);
//               font-size: 3rem;
//               font-weight: bold;
//               color: var(--title-color);

//               &::before {
//                 content: '$';
//                 position: relative;
//                 top: -20px;
//                 font-size: 1.2rem;
//                 font-weight: 600;
//               }
//             }

//             p {
//               font-family: var(--font);
//               text-transform: lowercase;
//               color: var(--medium-text);
//             }
//           }

//           .plan-tagline {
//             text-align: center;
//             padding: 1rem 0;

//             p {
//               font-family: var(--font);
//               color: var(--medium-text);
//             }
//           }

//           .button-wrap {
//             width: 100%;
//             padding: 1.5rem 0;
//           }

//           .benefits {
//             li {
//               padding: 0.5rem 0;
//               color: var(--light-text);

//               span {
//                 color: var(--title-color);
//                 font-weight: 500;
//               }
//             }
//           }
//         }
//       }

//       .plan-focus {
//         display: flex;

//         .left-side {
//           width: 35%;
//           padding: 40px;
//           border-right: 1px solid var(--card-border-color);

//           .header {
//             display: flex;
//             align-items: center;
//             width: 100%;

//             img {
//               display: block;
//               height: 40px;
//               width: 40px;
//               margin-right: 0.5rem;
//             }

//             span {
//               display: block;
//               font-size: 1.4rem;
//               font-family: var(--font-alt);
//               color: var(--title-color);
//               transition: color 0.3s;
//             }
//           }

//           .plan-tagline {
//             padding: 1rem 0;

//             p {
//               font-family: var(--font);
//               color: var(--medium-text);
//             }
//           }

//           .price {
//             width: 100%;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             padding: 1rem 0;

//             :deep(.control) {
//               flex-grow: 2;
//               margin-right: 1rem;
//             }

//             :deep(.input) {
//               height: 40px;
//               background: var(--wrap-muted-color);
//               border-color: var(--wrap-muted-color);

//               &:focus {
//                 background: var(--input-base-bg-color);
//                 border-color: var(--input-base-border-color-hover);
//                 box-shadow: var(--light-box-shadow);
//               }
//             }

//             .amount {
//               font-family: var(--font);
//               font-size: 3rem;
//               font-weight: bold;
//               color: var(--title-color);

//               &::before {
//                 content: '$';
//                 position: relative;
//                 top: -20px;
//                 font-size: 1.2rem;
//                 font-weight: 600;
//               }
//             }
//           }

//           .price-info {
//             padding: 8px 0 16px;

//             p {
//               color: var(--light-text);
//             }
//           }

//           .button-wrap {
//             width: 100%;
//             padding: 1.5rem 0;
//           }

//           .benefits {
//             padding-bottom: 1.5rem;

//             li {
//               padding: 0.5rem 0;
//               color: var(--light-text);

//               span {
//                 color: var(--title-color);
//                 font-weight: 500;
//               }
//             }
//           }
//         }

//         .right-side {
//           width: 65%;

//           .feature-highlight {
//             position: relative;

//             .highlight-item {
//               padding: 40px;
//               display: flex;
//               flex-direction: column;
//               justify-content: space-between;

//               .header {
//                 .header-inner {
//                   .title-wrap {
//                     h3 {
//                       font-family: var(--font-alt);
//                       font-size: 1.4rem;
//                       font-weight: 600;
//                       color: var(--title-color);
//                     }
//                   }
//                 }

//                 .subheader {
//                   p {
//                     font-family: var(--font);
//                     font-size: 1rem;
//                     color: var(--medium-text);
//                   }
//                 }
//               }

//               .highlight-image {
//                 display: block;
//                 margin-top: 30px;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// /* stylelint-disable-next-line media-feature-range-notation */
// @media (max-width: 767px) {
//   .requirement-wrapper {
//     .requirement-tabs {
//       .tab-item {
//         span {
//           display: none;
//         }
//       }
//     }

//     .requirement-container {
//       .container-inner {
//         .solo-plans {
//           flex-direction: column;

//           .solo-plan {
//             width: 100%;

//             &:nth-child(2),
//             &:nth-child(3) {
//               margin-top: 40px;
//               padding-top: 40px;
//               border-top: 1px solid var(--card-border-color);
//             }
//           }
//         }

//         .plan-focus {
//           flex-direction: column;

//           .left-side {
//             width: 100%;

//             .price {
//               .control {
//                 max-width: 150px;
//               }
//             }
//           }

//           .right-side {
//             width: 100%;
//           }
//         }
//       }
//     }
//   }
// }

// /* stylelint-disable-next-line media-feature-range-notation */
// @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
//   .requirement-container {
//     .container-inner {
//       .plan-focus {
//         .left-side {
//           width: 45% !important;
//         }

//         .right-side {
//           width: 55% !important;
//         }
//       }
//     }
//   }
// }


.pricing-compact {
  position: relative;
  margin-bottom: 3rem;


  .pricing-compact-box {
    position: relative;
    display: flex;
    width: 100%;
    background: green;
    // background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1.25rem;
    box-shadow: var(--spread-shadow);

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
        margin-left: 1%;
        width: 29%;
      }

      &.naver-1 {
        margin-left: 31%;
      }

      &.naver-2 {
        margin-left: 64%;
      }
    }

    .pricing-inner-box {
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
  .pricing-compact {
    .pricing-compact-box {
      flex-direction: column;

      .naver-box {
        display: none;
      }

      .pricing-inner-box {
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
  .pricing-compact {
    .pricing-compact-box {
      flex-wrap: wrap;

      .naver-box {
        display: none;
      }

      .pricing-inner-box {
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
