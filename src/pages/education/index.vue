<route lang="yaml">
  meta:
    layout: default
  </route>

  <script setup lang="ts">
  import {
    educationFeatures,
  } from '/@src/data/pages/creators'
  import { socialLinks } from '/@src/data/blocks/advanced/social'
  </script>


<template>
  <div>
    <HeroE />

    <Section tongue="tongue-1">
      <Container>
        <VideoBlockE
          title="Expert Guidance On Educational Opportunities"
          source="/assets/video/meeting.mp4"
          poster="/assets/demo/img/posters/poster-1c.jpg"
          :features="educationFeatures"
          links
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
