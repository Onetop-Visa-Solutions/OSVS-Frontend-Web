<route lang="yaml">
  meta:
    layout: default
  </route>

  <script setup lang="ts">
import {destinationInfo} from '../../../data/pages/destinations'
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
  </div>
</template>
