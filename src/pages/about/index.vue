<template>
  <div>
    <Section>
      <Container
        class="mt-7"
        color="white"
      >
        <div
          style="margin-top: 9rem"
          class="mt-10"
        >
          <span class="has-text-weight-bold">More about us</span>
          <h3 class="title text is-size-1 text-primary">
            Guiding Your Path to Growth and Success through Expert Consultation
          </h3>

          <div class="columns gap">
            <div class="column d-flex has-text-justified">
              <p>
                At One-stop Visa Solutions, we specialize in providing comprehensive
                visa consultation services to individuals seeking to travel or study
                abroad. Our experienced professionals are dedicated to guiding
                clients through the intricacies of the visa application process,
                ensuring a smooth and successful outcome. We understand that each
                individual's visa requirements and circumstances are unique, which
                is why we offer personalized visa guidance tailored to meet specific
                needs and goals.
              </p>
              <p>
                From document preparation and review to application assistance and
                interview preparation, our team provides expert support at every
                step. We work closely with clients to gather and organize all
                necessary documents, ensuring they are complete, accurate, and
                compliant with the specific visa requirements. Our consultants guide
                applicants through the entire application process, offering detailed
                instructions and assistance in completing application forms
                accurately. We also provide interview preparation to help clients
                confidently present themselves during visa interviews.
              </p>
            </div>

            <div class="column info">
              <div>
                <p class="has-text-weight-bold">
                  General Inquiries
                </p>
                <p>info@onestoptravelagent.com</p>
              </div>
              <div>
                <p class="has-text-weight-bold">
                  Support Inquiries
                </p>
                <p>support@onestoptravelagent.com</p>
              </div>
              <div>
                <p class="has-text-weight-bold">
                  Assistance
                </p>
                <p>
                  Check out our help guides or contact one of our customer care
                  agents via email every workday (8AM – 11PM GMT). Our support team
                  is also available by phone, but only during working hours
                  (+251966698535).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 main-img-container">
          <img
            src="../../../public/assets/customers/lefops.svg"
            alt=""
          >
        </div>

        <div class="mt-12">
          <SectionCard />
          <Gallery />
        </div>
      </Container>
    </Section>
    <Footer
      text="Onestop Visa Solutions is a leading provider of study abroad programs and visa assistance services, dedicated to empowering students and visitors alike with transformative educational experiences worldwide. Subscribe to our newsletter for valuable insights and updates as we guide you towards your academic and travel aspirations. "
      :social-links="socialLinks"
      bubbles
    />
  </div>
</template>

<script setup lang="ts">
  import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>
<style lang="scss">
.gap {
  gap: 3rem;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.d-flex {
  display: flex;
  gap: 2rem;
  flex-direction: column;
}

.main-img-container {
  width: 100%;
  height: 806px;
  border-radius: 10px;
  overflow: hidden;

  img {
    background-color: #07c3ed;
    width: 100%;
    height: 100%;
  }
}
</style>
