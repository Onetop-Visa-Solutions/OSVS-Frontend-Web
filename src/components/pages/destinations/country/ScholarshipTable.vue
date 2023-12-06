<script setup lang="ts">
export interface Scholarship {
      description: string
      minimumTuitionCost: number
      maximumTuitionCost: number
      averageLivingCost: number
      costLabel: string
      scholarships: {
        name: string
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
    <div class="py-2">
      <div class="job-topics">
        <div class="columns is-multiline b-columns-half-tablet-p">
          <div
            v-for="(topic, index) in props.scholarshipItem.scholarships"
            :key="index"
            class="column is-4"
          >
            <RouterLink
              :to="topic.name"
              class="job-topic"
            >
              <div class="topic-icon">
                <ClientOnly>
                  <i
                    class="iconify"
                    :data-icon="topic.name"
                  />
                </ClientOnly>
              </div>
              <div class="meta">
                <h3>{{ topic.name }}</h3>
                <p class="paragraph rem-90">
                  {{ topic.name }}
                </p>
              </div>
            </RouterLink>
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
