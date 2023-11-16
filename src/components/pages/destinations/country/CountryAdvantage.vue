<script setup lang="ts">

export interface RequirementProps {
  advantageList: {
    name: string
      image: string
      description: string
    }[]
}

const props = withDefaults(defineProps<RequirementProps>(), {
  advantageList: () => [],

})
const activeTab = ref('tab1')
</script>

<template>
  <div class="py-6">
    <div class="centered-tabbed-section">
      <div class="section-tabs">
        <a
          class="tab-item"
          :class="activeTab === 'tab1' && 'is-active'"
          href="#"
          @click.prevent="activeTab = 'tab1'"
          @keydown.space.prevent="() => (activeTab = `tab1`)"
        >
          {{ props.advantageList[0].name }}
        </a>
        <a
          class="tab-item"
          :class="activeTab === 'tab2' && 'is-active'"
          href="#"
          @click.prevent="activeTab = 'tab2'"
          @keydown.space.prevent="() => (activeTab = `tab2`)"
        >
          {{ props.advantageList[1].name }}
        </a>
        <a
          class="tab-item"
          :class="activeTab === 'tab3' && 'is-active'"
          href="#"
          @click.prevent="activeTab = 'tab3'"
          @keydown.space.prevent="() => (activeTab = `tab3`)"
        >
          {{ advantageList[2].name }}
        </a>
      </div>

      <div class="tab-outer">
        <transition
          name="fade-slow"
          mode="out-in"
        >
          <div
            v-if="activeTab === 'tab1'"
            class="tab-inner"
          >
            <p class="paragraph mb-4">
              {{ advantageList[0].description }}
            </p>
            <DarkImage
              :src="props.advantageList[0].image"
              :src-dark="props.advantageList[0].image"
              width="1000"
              height="711"
              :alt="props.advantageList[0].name"
            />
          </div>
        </transition>

        <transition
          name="fade-slow"
          mode="out-in"
        >
          <div
            v-if="activeTab === 'tab2'"
            class="tab-inner"
          >
            <p class="paragraph mb-4">
              {{ props.advantageList[1].description }}
            </p>
            <DarkImage
              :src="props.advantageList[1].image"
              :src-dark="props.advantageList[1].image"
              width="1000"
              height="711"
              :alt="props.advantageList[1].name"
            />
          </div>
        </transition>

        <transition
          name="fade-slow"
          mode="out-in"
        >
          <div
            v-if="activeTab === 'tab3'"
            class="tab-inner"
          >
            <p class="paragraph mb-4">
              {{ props.advantageList[2].description }}
            </p>
            <DarkImage
              :src="props.advantageList[2].image"
              :src-dark="props.advantageList[2].image"
              width="1000"
              height="711"
              :alt="props.advantageList[2].name"
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.centered-tabbed-section {
  position: relative;
  max-width: 780px;
  margin: 0 auto;

  .section-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 580px;
    margin: 0 auto 2rem;

    .tab-item {
      font-family: var(--font);
      border: 2px solid var(--button-base-border-color);
      background: var(--button-base-bg-color);
      color: var(--button-base-color);
      border-radius: 0.5rem;
      height: 54px;
      min-width: 210px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      width: calc(33.3% - 2rem);

      &.is-active {
        border-color: var(--primary);
        color: var(--primary);
      }
    }
  }

  .tab-outer {
    .tab-inner {
      img {
        display: block;
        width: 100%;
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (max-width: 767px) {
  .centered-tabbed-section {
    .section-tabs {
      flex-direction: column;

      .tab-item:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    }
  }
}
</style>
