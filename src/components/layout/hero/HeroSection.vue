<script setup lang="ts">
// import { customerLogos } from '/@src/data/pages/logos'
// import { serviceAvatars } from '/@src/data/pages/home/services'
import {serviceSolutions} from '/@src/data/pages/home/services'
</script>

<template>
  <Hero
    overlay
    class="is-right"
    alignment="center"
    color="grey"
    shape-orientation="right"
    video
  >
    <template #body>
      <div class="columns is-vcentered mt-12">
        <!--Hero Content-->
        <div class="column is-relative">
          <div class="mx-auto max-w-6 mb-4">
            <p
              class="paragraph is-uppercase rem-100 weight-6 text-primary mb-2"
            >
              Speak to a Visa Specialist
            </p>
            <Title
              tag="h1"
              class="text-white"
              :size="1"
              weight="bold"
            >
              <span>
                Embark, Discover and Organize

                <span class="text-primary">Travel</span>
                Adventures.              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="bold"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2 text-white"
            >
              All your travel affairs under roof.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button
                color="primary"
                :long="2"
                raised
                bold
                rounded
              >
                Book a consultation
              </Button>
              <Button
                elevated
                bold
                to="/contact"
                :long="2"
                icon-left="ic:baseline-support-agent"
                rounded
              >
                Contact
              </Button>
            </div>
          </div>

          <!--Hero Cards-->
          <div class="hero-composition-container">
            <div class="columns b-columns-third-tablet-p">
              <div class="column">
                <!--Service card-->
                <!-- <div class="service-card"> -->
                <PulseCards :features="serviceSolutions" />
                <!-- <DarkImage
                    src="/assets/services/education/study-abroad-2.jpg"
                    alt="Service image"
                    width="600"
                    height="510"
                  />
                  <div class="card-head">
                    <Title
                      tag="h3"
                      :size="6"
                      weight="semi"
                    >
                      Educational Consultation
                    </Title>
                  </div>
                  <div class="card-foot">
                    <ActionLink
                      link="/education"
                      size="small"
                    />
                  </div> -->
                <!-- </div> -->
              </div>
              <!-- <div class="column is-3">
                <div class="panel-card authors-card">
                  <Title
                    tag="h3"
                    :size="5"
                    weight="bold"
                  >
                    Destinations
                  </Title>
                  <AvatarGroup
                    size="medium"
                    :avatars="serviceAvatars"
                    :limit="5"
                    compact
                    counter
                  />
                </div>
                <div class="service-card">
                  <DarkImage
                    src="/assets/services/visit/visit-1.jpg"
                    alt="Service image"
                    width="600"
                    height="510"
                  />
                  <div class="card-head">
                    <Title
                      tag="h3"
                      :size="6"
                      weight="semi"
                    >
                      Tourist Visa Application
                    </Title>
                  </div>
                  <div class="card-foot">
                    <ActionLink
                      link="/visit"
                      size="small"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-3">
              <div class="service-card pushed">
                <DarkImage
                  src="/assets/services/consultation/consultation-1.jpg"
                  alt="Service image"
                  width="600"
                  height="510"
                />
                <div class="card-head">
                  <Title
                    tag="h3"
                    :size="6"
                    weight="semi"
                  >
                    Visa Application Consultations
                  </Title>
                </div>
                <div class="card-foot">
                  <ActionLink
                    link="/consultation"
                    size="small"
                  />
                </div>
              </div>
              <div class="panel-card popular-card">
                <AvatarSimple
                  picture="/assets/services/solutions.png"
                  size="medium"
                />
                <div class="meta">
                  <p class="paragraph is-uppercase rem-80 weight-5">
                    Offerings
                  </p>
                  <h3>
                    Customized Solutions.
                  </h3>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="service-card">
                <DarkImage
                  src="/assets/services/test-prep/test-prep-2.jpg"
                  alt="Service image"
                  width="600"
                  height="510"
                />
                <div class="card-head">
                  <Title
                    tag="h3"
                    :size="6"
                    weight="semi"
                  >
                    Test Prep Assistance
                  </Title>
                </div>
                <div class="card-foot">
                  <ActionLink
                    link="/test"
                    size="small"
                  />
                </div>
              </div>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- <template #footer>
      <div class="mx-auto max-w-8">
        <p class="paragraph rem-100 text-white has-text-centered">
          Collaborating with companies
        </p>
        <div class="tabs is-centered pb-6">
          <HeroClients :logos="customerLogos" />
        </div>
      </div>
    </template> -->
  </Hero>
</template>

<style lang="scss" scoped>
:deep(.hero) {
  overflow: hidden !important;
}

:deep(.hero-body) {
  padding-bottom: 2rem !important;
}

:deep(.title) {
  &.is-1 {
    font-size: 2.5rem;
  }
}

.hero-composition-container {
  position: relative;
  margin-top: 0;
  text-align: left;

  .panel-card {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1.25rem;
    padding: 1.5rem;
    box-shadow: var(--spread-shadow);

    &.authors-card {
      max-width: 280px;
      margin-left: auto;
      margin-bottom: 1rem;
      margin-top: -3rem;
    }

    &.popular-card {
      display: flex;
      align-items: center;
      max-width: 280px;
      margin-right: auto;

      .meta {
        margin-left: 0.5rem;

        h3 {
          font-family: var(--font-alt);
          font-weight: 600;
          color: var(--title-color);
        }
      }
    }
  }

  .service-card {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1.25rem;
    padding: 0.75rem;
    box-shadow: var(--spread-shadow);

    > img {
      display: block;
      border-radius: 1rem;
      margin-bottom: 0.75rem;
    }

    .card-head {
      display: flex;
      align-items: center;
      padding: 0 0.25rem;

      :deep(.avatar) {
        margin-right: 0.5rem;
      }
    }

    .card-foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0.25rem 0.5rem;

      .price,
      .likes {
        display: flex;
        align-items: center;

        svg {
          vertical-align: middle;
          margin-right: 0.25rem;
        }

        span {
          font-size: 0.95rem;
          font-family: var(--font-alt);
          font-weight: 600;
          color: var(--title-color);
        }
      }
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  .pulled {
    margin-top: -3rem;
  }

  .pushed {
    margin-top: 3rem;
  }
}
/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (max-width: 767px) {
  .hero-composition-container {
    margin-top: 2rem;

    .columns {
      .column {
        &:nth-child(2) {
          .service-card {
            display: none;
          }

          .panel-card {
            position: relative;
            top: -2rem;
            right: -5rem;
          }
        }

        &:nth-child(3),
        &:nth-child(3),
        &:nth-child(4) {
          display: none;
        }
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .hero-composition-container {
    .columns {
      .column:nth-child(4) {
        display: none;
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .hero-composition-container {
    .panel-card {
      padding: 1.25rem;

      :deep(.title) {
        font-size: 1.1rem;
      }

      :deep(.avatar-group) {
        .avatar,
        .avatar-image {
          height: 42px;
          width: 42px;
          min-width: 42px;
        }
      }

      > :deep(.avatar) {
        height: 36px;
        width: 36px;
        min-width: 36px;

        .avatar-image {
          height: 36px;
          width: 36px;
          min-width: 36px;
        }
      }

      .meta h3 {
        font-size: 0.95rem;
      }
    }
  }
}

/* stylelint-disable */

//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      .hero-composition-container .columns {
        display: flex !important;

        .column {
          width: initial !important;
          margin: 0 !important;
        }
      }
    }
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      .hero-composition-container .columns {
        display: flex !important;

        .column {
          width: initial !important;
          margin: 0 !important;
        }
      }
    }
  }
}

/* stylelint-enable */
</style>
