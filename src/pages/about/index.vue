<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

import { customerLogos } from '/@src/data/pages/logos'
import { stats } from '/@src/data/blocks/advanced/stats'
import { values } from '/@src/data/blocks/advanced/values'
import { team } from '/@src/data/blocks/advanced/team'
import { boxedGallery } from '/@src/data/blocks/gallery'
import { press } from '/@src/data/blocks/advanced/press'
import { footer } from '/@src/data/footer'
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
                  first-paragraph="At One-stop Visa Solutions, we specialize in providing comprehensive visa consultation services to individuals seeking to travel or study abroad. Our experienced professionals are dedicated to guiding clients through the intricacies of the visa application process, ensuring a smooth and successful outcome. We understand that each individual's visa requirements and circumstances are unique, which is why we offer personalized visa guidance tailored to meet specific needs and goals.At One-stop Visa Solutions, we specialize in providing comprehensive visa consultation services to individuals seeking to travel or study abroad. Our experienced professionals are dedicated to guiding clients through the intricacies of the visa application process, ensuring a smooth and successful outcome. We understand that each individual /'s visa requirements and circumstances are unique, which is why we offer personalized visa guidance tailored to meet specific needs and goals."
                  second-paragraph="From document preparation and review to application assistance and interview preparation, our team provides expert support at every step. We work closely with clients to gather and organize all necessary documents, ensuring they are complete, accurate, and compliant with the specific visa requirements. Our consultants guide applicants through the entire application process, offering detailed instructions and assistance in completing application forms accurately. We also provide interview preparation to help clients confidently present themselves during visa interviews."
                  support-paragraph="Check out our help guides or contact one of our customer care agents via email every workday (8AM to 11PM GMT). Our support team is also available by phone, but only during working hours (+251-96-669-8535)."
                  contact-address="info@onestoptravelagent.com"
                  support-address="support@onestoptravelagent.com"
                />
              </template>
            </PageTitle>
          </div>

          <img
            src="/assets/demo/img/bg/about-team-2.jpg"
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
  </div>
</template>
