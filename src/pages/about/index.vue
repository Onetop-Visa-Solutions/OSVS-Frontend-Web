<route lang="yaml">
  meta:
    layout: anomaly
  </route>
  <script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { customerLogos } from '/@src/data/pages/logos'
import { stats } from '/@src/data/blocks/advanced/stats'
import { values } from '/@src/data/blocks/advanced/values'
// import { team } from '/@src/data/blocks/advanced/team'
// import { boxedGallery } from '/@src/data/blocks/gallery'
// import { press } from '/@src/data/blocks/advanced/press'
</script>

<template>
  <div>
    <Section>
      <Container>
        <div class="py-4">
          <div class="-mt-6">
            <PageTitle
              title="Guiding Your Path to Success through Expert Consultation"
              subtitle="More About Us"
              aligned
            >
              <template #content>
                <TextSection
                  first-paragraph="At One-stop Visa Solutions, we specialize in providing comprehensive visa consultation services to individuals seeking to travel or study abroad. Our experienced professionals are dedicated to guiding clients through the intricacies of the visa application process, ensuring a smooth and successful outcome. We understand that each individual's visa requirements and circumstances are unique, which is why we offer personalized visa guidance tailored to meet specific needs and goals."
                  second-paragraph="From document preparation and review to application assistance and interview preparation, our team provides expert support at every step. We work closely with clients to gather and organize all necessary documents, ensuring they are complete, accurate, and compliant with the specific visa requirements. Our consultants guide applicants through the entire application process, offering detailed instructions and assistance in completing application forms accurately. We also provide interview preparation to help clients confidently present themselves during visa interviews."
                  support-paragraph="Check out our help guides or contact one of our customer care agents via email every workday (8AM to 11PM GMT). Our support team is also available by phone, but only during working hours (+251-96-669-8535)."
                  contact-address="info@onestoptravelagent.com"
                  support-address="support@onestoptravelagent.com"
                />
              </template>
            </PageTitle>
          </div>

          <img
            src="/assets/pages/about/our-company.jpg"
            alt="About image"
            width="1152"
            height="547"
            @error.once="
              (event) => viaPlaceholderErrorHandler(event, '1152x547')
            "
          >

          <LogoMarquee
            :logos="customerLogos"
            compact
          />
        </div>
      </Container>
    </Section>
    <!--
    <Section
      wave="wave-1"
      shape-color="grey"
    >
      <Container>
        <SectionTitle
          title="Meet our leadership team"
          subtitle="A Talented Team"
        />

        <div class="mt-6">
          <TeamSection :members="team" />
        </div>
      </Container>
    </Section> -->

    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <div class="pb-6">
          <SideSectionVideo
            subtitle="Our Company"
            title=" Your Guide to Personal, Academic, and Career Success!"
            content=" From general consultations to visiting guidance and educational consultation, our services are designed to provide valuable insights, support, and guidance to help you achieve your goals. Get ready to unlock your full potential as we take you through the various aspects of our services."
            source="/assets/pages/about/about.mp4"
            poster="/assets/pages/about/about-poster.jpg"
            to="/"
            blob
          />
        </div>

        <NumbersSection
          subtitle="Our Stats in Number"
          title="A Glimpse into Our Impressive Figures"
          content="Discover the impact of our exceptional services through these compelling statistics that showcase our commitment to excellence and client satisfaction. Explore our remarkable figures and see why we are the trusted choice for all your consultation needs."
          :numbers="stats"
          animated
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="mb-6">
          <SectionTitle
            title="What makes us who we are"
            subtitle="The values that make us who we are"
          />
        </div>

        <ValuesSection
          :values="values"
          image-height="130px"
        />
      </Container>
    </Section>

    <!--
    <Section grey>
      <Container>
        <div class="mb-6">
          <SectionTitle
            title="We are in the press"
            subtitle="They talk about us"
          />
        </div>

        <PressSection :releases="press" />
      </Container>
    </Section>

    <Section>
      <Container>
        <LogoSection
          title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
          :logos="customerLogos"
        />
        <GalleryBlockC :items="boxedGallery" />
        <div class="mb-12" />
      </Container>
    </Section> -->
    <Footer
      v-background="{
        src: '/assets/shapes/lowpoly-pattern-blue.jpg',
        placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
      }"
      text="Onestop Solutions is a leading provider of study abroad consultation programs and visa assistance services, dedicated to empowering students and visitors alike with transformative educational experiences worldwide. Subscribe to our newsletter for valuable insights and updates as we guide you towards your academic and travel aspirations. "
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
