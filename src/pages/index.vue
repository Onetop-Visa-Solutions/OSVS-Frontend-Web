<route lang="yaml">
  meta:
    layout: home
  </route>

<script setup lang="ts">
import {ourDifference} from '/@src/data/pages/company'
import { resources } from '/@src/data/pages/blog/resource'
import { testimonials } from '/@src/data/blocks/advanced/testimonials'
import { socialLinks } from '/@src/data/blocks/advanced/social'
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
          image="/assets/services/exceptional-service/exceptional-service-6.svg"
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
              to="/blog"
              raised
              bold
              rounded
            >
              Show More
            </Button>
          </div>
        </div>

        <!-- Testimonials Section -->
        <TestimonialMarquee
          :testimonials="testimonials"
          :limit="12"
          color="default"
        />


        <!-- Contact US CTA -->
        <CtaBlock
          title-primary="Explore Now!"
          content-primary="From study abroad programs to visa assistance and more, we have everything you need to make your dreams a reality."
          cta-primary="Our Services"
          cta-primary-link="/services"
          title-secondary="More info?"
          content-secondary="Get in touch with our team for personalized assistance and further information."
          cta-secondary="Contact Us"
          cta-secondary-link="/contact"
          boxed
          shapes
          animated
        />
      </Container>
    </section>
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
