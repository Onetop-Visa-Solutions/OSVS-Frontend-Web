<script setup lang="ts">
export type CardShape = 'straight' | 'squared' | 'curved'

export interface SectionCardProps {
  icon: string
  title: string
  content: string
}
</script>

<template>
  <div>
    <PageTitle title="What makes us who we are" />
    <div class="columns section-container is-mobile is-multiline">
      <div class="column section-card">
        <div class="section-header">
          <!-- <img src="" alt=""> -->
        </div>

        <div class="section-content has-text-centered">
          <h5 class="is-size-2 text-primary text">
            Our Vision
          </h5>
          <p>
            To empower individuals worldwide through exceptional consultation
            services, enabling them to pursue their dreams and aspirations with
            confidence.
          </p>
        </div>
      </div>
      <div class="column section-card">
        <div class="section-header">
          <!-- <img src="" alt=""> -->
        </div>

        <div class="section-content has-text-centered">
          <h5 class="is-size-2 text-primary text">
            Our Mission
          </h5>
          <p>
            Deliver personalized and comprehensive consultation services across
            various domains, simplifying complex processes, empowering informed
            decision-making, and maximizing client success.
          </p>
        </div>
      </div>
      <div class="column section-card">
        <div class="section-header">
          <!-- <img src="" alt=""> -->
        </div>

        <div class="section-content has-text-centered">
          <h5 class="is-size-2 text-primary text">
            Our Values
          </h5>
          <p>
            Excellence. Empowerment. Integrity. Collaboration. Continuous
            Learning. Client-Centric Approach. Social Responsibility.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-container {
  gap: 2rem;
}

.section-card {
  // border: 1px solid #7FFFFF;
  border-radius: 10px;

  .section-header {
    height: 195px;
    background-color: #7fffff;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
