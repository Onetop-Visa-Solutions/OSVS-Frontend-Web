<route lang="yaml">
  meta:
    layout: solid-nav
  </route>

  <script setup lang="ts">
  import { socialLinks } from '/@src/data/blocks/advanced/social'  </script>
  import { contactInfo } from '/@src/data/pages/contact'

<template>
  <div>
    <HeroContact
      title="Contact Us"
      subtitle="Fill out the form below to reach us"
      :lng="9.014888359993932"
      :lat="38.78752583836229"
      :zoom="16"
    />

    <Section color="grey">
      <Container>
        <ContactInfo :infos="contactInfo" />
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
