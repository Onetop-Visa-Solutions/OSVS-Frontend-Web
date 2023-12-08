<script setup lang="ts">
export interface Scholarship {
      description: string
      minimumTuitionCost: number
      maximumTuitionCost: number
      averageLivingCost: number
      costLabel: string
      scholarships: {
        name: string
        logo: string
        link: string
        minimumAmount:number
        maximumAmount: number}[]

    }

export interface ScholarshipProps {
  scholarshipItem?: Scholarship
  limit?: number
}
const props = defineProps<ScholarshipProps>()

</script>

<template>
  <div v-if="props.scholarshipItem">
    <div class="pt-4">
      <div class="job-topics">
        <div class="columns is-multiline b-columns-half-tablet-p">
          <!-- <p class="paragraph mb-6">
            {{ scholarshipItem?.icon }}
          </p> -->
          <div
            v-for="(topic, index) in props.scholarshipItem.scholarships"
            :key="index"
            class="column is-4"
          >
            <a
              :href="topic.name"
              target="_blank"
              class="job-topic"
            >
              <div class="topic-icon">
                <img
                  :src="topic.logo"
                  alt="s"
                >
              </div>
              <div class="meta">
                <h3>{{ topic.name.slice(0,30) }}</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.job-topics {
  position: relative;
  max-width: 1040px;
  margin: 0 auto;

  .job-topic {
    display: flex;
    align-items: center;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.85rem;
    padding: 1rem;
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;

    .topic-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      width: 44px;
      background: var(--wrap-muted-color);
      border-radius: 50%;
      font-size: 1.25rem;
    }

    .meta {
      margin-left: 0.75rem;

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--title-color);
        line-height: 1.2;
      }
    }

    &:hover {
      transform: translateY(-5px);
      border-color: var(--primary);
      box-shadow: var(--light-box-shadow);
    }
  }
}
</style>
