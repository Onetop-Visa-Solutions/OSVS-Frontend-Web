<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
</script>

<template>
  <HeroVariant
    color="grey"
    class="circle-hero"
    size="fullheight"
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="hero-caption">
            <Title
              tag="h1"
              :size="2"
              weight="bold"
            >
              Educational Guidance For
              <span class="text-primary">Students</span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              classes="b-centered-tablet-p text-medium"
            >
              Unlocking Global Opportunities: Supporting Students' Academic and Personal Growth Through Study Abroad Programs
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button
                color="primary"
                :long="2"
                to="/education/destinations"
                raised
                bold
                rounded
              >
                Explore Destinations
              </Button>
              <Button
                elevated
                bold
                :long="2"
                rounded
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
        <div class="column is-6 is-offset-1">
          <div class="circle-composition">
            <img
              src="/assets/demo/image/people/girl-smiling-circle.png"
              width="500"
              height="500"
              alt="hero-image"
              @error.once="
                (event) => viaPlaceholderErrorHandler(event, `500x500`)
              "
            >
            <!--Dots-->
            <div class="composition-dot composition-dot-1">
              <i
                class="iconify"
                data-icon="icon-park-twotone:good-one"
              />
            </div>
            <div class="composition-dot composition-dot-2">
              <i
                class="iconify"
                data-icon="ic:round-support-agent"
              />
            </div>
            <div class="composition-dot composition-dot-3">
              <i
                class="iconify"
                data-icon="ion:stopwatch-outline"
              />
            </div>
            <!--Blocks-->
            <div class="composition-block composition-block-1">
              <div class="composition-card">
                <Title
                  tag="h3"
                  :size="7"
                  weight="semi"
                  leading
                >
                  Ongoing guidance
                </Title>
                <div class="is-flex is-align-items-center">
                  <span class="fake-dot" />
                  <p class="paragraph rem-85">
                    Continuous support
                  </p>
                </div>
              </div>
              <div class="composition-avatar">
                <!-- <AvatarSimple
                  size="medium"
                  picture="/assets/demo/img/avatars/25.jpg"
                /> -->
              </div>
            </div>
            <div class="composition-block composition-block-2">
              <div class="composition-card">
                <Title
                  tag="h3"
                  :size="7"
                  weight="semi"
                  leading
                >
                  Excellence oversight
                </Title>
                <div class="is-flex is-align-items-center">
                  <i
                    class="iconify star-icon"
                    data-icon="uiw:star-on"
                  />
                  <i
                    class="iconify star-icon"
                    data-icon="uiw:star-on"
                  />
                  <i
                    class="iconify star-icon"
                    data-icon="uiw:star-on"
                  />
                  <i
                    class="iconify star-icon"
                    data-icon="uiw:star-on"
                  />
                  <i
                    class="iconify star-icon"
                    data-icon="uiw:star-on"
                  />
                </div>
              </div>
              <div class="composition-avatar">
                <!-- <AvatarSimple
                  size="medium"
                  picture="/assets/demo/img/avatars/42.jpg"
                /> -->
              </div>
            </div>
            <div class="composition-block composition-block-3">
              <div class="composition-card">
                <Title
                  tag="h3"
                  :size="7"
                  weight="semi"
                  leading
                >
                  Timely assistance
                </Title>
                <div class="is-flex is-align-items-center">
                  <p class="paragraph rem-85">
                    Prompt and quick responses
                  </p>
                </div>
              </div>
              <div class="composition-avatar">
                <!-- <AvatarSimple
                  size="medium"
                  picture="/assets/demo/img/avatars/29.jpg"
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="mx-auto max-w-8">
        <div class="tabs is-centered pb-4" />
      </div>
    </template>
  </HeroVariant>
</template>

<style lang="scss" scoped>
.circle-hero {
  .circle-composition {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 480px;

    img {
      position: relative;
      top: -1rem;
      display: block;
      margin: 0 auto;
      max-width: 320px;
      z-index: 2;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid var(--button-base-border-color-hover);
      border-radius: 50%;
    }

    &::before {
      height: 420px;
      width: 420px;
    }

    &::after {
      height: 580px;
      width: 580px;
    }

    .composition-dot {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3.25rem;
      width: 3.25rem;
      border-radius: 50%;
      background: var(--primary);
      box-shadow: var(--primary-box-shadow);
      font-size: 1.5rem;
      color: var(--white-smoke);
      z-index: 3;

      &.composition-dot-1 {
        top: 5%;
        right: 5%;
      }

      &.composition-dot-2 {
        bottom: 25%;
        left: 25%;
      }

      &.composition-dot-3 {
        top: 15%;
        left: 8%;
      }
    }

    .composition-block {
      position: absolute;
      display: flex;
      align-items: center;
    }

    .composition-avatar {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 56px;
      width: 56px;
      border-radius: 50%;
      // background: var(--hero-grey-bg-color);
    }

    .composition-card {
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 0.65rem;
      padding: 1.25rem;
      box-shadow: var(--light-box-shadow);
    }

    .composition-block-1 {
      bottom: 5%;
      right: 0;
      z-index: 3;

      .composition-avatar {
        left: -1rem;
      }

      .composition-card {
        .fake-dot {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: var(--wrap-bg-color);
          border: 3px solid var(--primary);
          margin-right: 0.5rem;
        }
      }
    }

    .composition-block-2 {
      top: 25%;
      right: -15%;
      z-index: 3;

      .composition-avatar {
        left: -1rem;
      }

      .composition-card {
        .star-icon {
          color: var(--yellow);
          margin-right: 0.35rem;
        }
      }
    }

    .composition-block-3 {
      top: 35%;
      left: -20%;
      flex-direction: row-reverse;
      z-index: 3;

      .composition-avatar {
        right: -1rem;
      }

      .composition-card {
        .star-icon {
          color: var(--yellow);
          margin-right: 0.35rem;
        }
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (max-width: 767px) {
  .circle-hero {
    .hero-caption {
      padding-top: 3rem;
      text-align: center;
    }

    .buttons {
      justify-content: center;
    }

    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .circle-composition {
      .composition-dot {
        &.composition-dot-1 {
          top: 9%;
        }

        &.composition-dot-2 {
          bottom: 26%;
          left: 12%;
        }

        &.composition-dot-3 {
          left: -5%;
        }
      }

      .composition-block {
        transform: scale(0.8);
      }

      .composition-block-1 {
        bottom: 8%;
        right: -60px;
      }

      .composition-block-2 {
        right: -50%;
      }

      .composition-block-3 {
        left: -50%;
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .circle-hero {
    .hero-caption {
      text-align: center;
      max-width: 560px;
      margin: 0 auto;
    }

    .buttons {
      justify-content: center;
    }

    .circle-composition {
      .composition-dot {
        &.composition-dot-1 {
          right: 16%;
        }

        &.composition-dot-2 {
          left: 33%;
        }

        &.composition-dot-3 {
          top: 16%;
          left: 11%;
        }
      }

      .composition-block-1 {
        bottom: 18%;
        right: 5%;
      }

      .composition-block-2 {
        right: -4%;
      }

      .composition-block-3 {
        left: -3%;
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .circle-hero {
    .circle-composition {
      .composition-block {
        transform: scale(0.9);
      }

      .composition-block-2 {
        right: -24%;
      }
    }
  }
}
</style>
