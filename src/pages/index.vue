<route lang="yaml">
  meta:
    layout:
  </route>

<script setup lang="ts">
import {ourDifference} from '/@src/data/pages/company'
import { resources } from '/@src/data/pages/blog/resource'

</script>

<template>
  <div>
    <HeroSection />
    <Section>
      <Container>
        <SectionTitle
          title="Unmatched Expertise. Exceptional Service."
          subtitle="Why Choose Us?"
        />

        <!-- Why choose us section -->
        <StackedSection
          :features="ourDifference"
          image="/assets/illustrations/features/ensuring.svg"
          dark-image="/assets/illustrations/features/ensuring-dark.svg"
          rounded
        />

        <!-- Blogs Showcase Section -->
        <PageTitle
          title="From Our Blog Snippet"
          subtitle="Onestop Blog"
        >
          <template #content>
            <div class="mx-auto max-w-6 mt-2">
              <p class="paragraph rem-115">
                Stay Connected and Inspired with the Latest Updates, Insights, and Travel Tips from Our Blog.
              </p>
            </div>

            <div class="mx-auto max-w-4 ">
              <SubscriptionCompact
                label="Subscribe"
                placeholder="Enter your email"
              />
            </div>
          </template>
        </PageTitle>
        <ResourceGrid
          :posts="resources"
          upside-down
        />

        <div class="load-more py-6">
          <div class="buttons is-centered">
            <Button
              color="primary"
              :long="3"
              raised
              bold
            >
              Load More
            </Button>
          </div>
        </div>

        <!-- Testimonials Section -->
      </Container>
    </section>
  </div>
</template>
