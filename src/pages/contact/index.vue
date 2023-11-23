<route lang="yaml">
  meta:
    layout: solid-nav
  </route>

  <script setup lang="ts">
  import { socialLinks } from '/@src/data/blocks/advanced/social'  </script>

<template>
  <div>
    <HeroContact
      title="Contact Us"
      subtitle="Fill out the form below to reach us"
      :lng="9.014888359993932"
      :lat="38.78752583836229"
      :zoom="16"
    />

    <!-- <Section color="grey">
      <Container>
        <ContactInfo :infos="contactInfo" />

        <ValuesSection
          :values="plantValues"
          image-height="120px"
        />
      </Container>
    </Section>

    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <SectionTitle
          title="Read our FAQs"
          subtitle="Have a Question?"
        />

        <FaqListBoxed :items="genericFaq" />

        <CtaBlockB
          title-primary="Start Now!"
          content-primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          cta-primary="Free Trial"
          cta-primary-link="/"
          title-secondary="More info?"
          content-secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          cta-secondary="Contact Us"
          cta-secondary-link="/"
          boxed
          shapes
          animated
        />
      </Container>
    </Section> -->

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
