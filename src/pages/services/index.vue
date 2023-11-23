<script setup lang="ts">
import { servicesTabbed } from '/@src/data/blocks/advanced/services'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { servicesFaq } from '/@src/data/blocks/advanced/faq'

</script>

<template>
  <div>
    <Section>
      <Container>
        <PageTitle
          title="Tailored Solutions "
          subtitle="We scale with you"
          text="Efficient, Reliable, and Hassle-Free Visa Processing for Your Peace of Mind."
        />

        <ServicesTabbed
          :services="servicesTabbed.allServices"
          :test-services="servicesTabbed.testServices"
          :core-services="servicesTabbed.coreServices"
        />
      </Container>
    </Section>

    <Section
      wave="wave-1"
      shape-color="grey"
    >
      <Container>
        <SectionTitle
          title="Read our FAQs"
          subtitle="Have a Question?"
        />

        <FaqListBoxed :items="servicesFaq" />
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
