<route lang="yaml">
  meta:
    layout: default
  </route>

  <script setup lang="ts">
import {destinationInfo} from '../../../data/pages/destinations'
import { socialLinks } from '/@src/data/blocks/advanced/social'

  </script>

<template>
  <div>
    <HeroD />
    <Section>
      <Container>
        <SectionTitle
          title="Exploring Your Ideal Study Destination"
          subtitle="Unlocking Your Potential"
        />

        <StackedSection
          :features="destinationInfo"
          image="/assets/illustrations/features/ensuring.svg"
          dark-image="/assets/illustrations/features/ensuring-dark.svg"
          rounded
        />
      </Container>
    </Section>
    <Footer
      v-background="{
        src: '/assets/shapes/lowpoly-pattern-blue.jpg',
        placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
      }"
      text="Onestop Visa Solutions is a leading provider of study abroad programs and visa assistance services, dedicated to empowering students and visitors alike with transformative educational experiences worldwide. Subscribe to our newsletter for valuable insights and updates as we guide you towards your academic and travel aspirations. "
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
