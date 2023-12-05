<route lang="yaml">
  meta:
    layout: anomaly
  </route>

<template>
  <div v-if="country">
    <HeroC
      :subtitle="country.name"
      title="Enrich Your Education  Prospects "
      :content="country.description"
      image="/assets/demo/img/features/usa-photo.png"
      image-width="744"
      image-height="558"
      reverse
    />

    <!-- Institutions List Content Block -->
    <InstitutionContent
      title="Educational Institutions In"
      :text="country.name"
      :alias="country.alias"
      :institutions-description="country.educationalPackage.institutionsDescription"
      link="/"
      :images="country.educationalPackage.institutions"
    />

    <!-- Requirements Section -->
    <Section>
      <PageTitleVariant
        title="Requirements for Programs"
        subtitle="Basic Requirements"
      />
      <RequirementsListE
        :requirements-item="country.educationalPackage.requirements"
        :scholarship-item="country.scholarshipAndFunding"
      />
    </Section>

    <!-- Why This Country Section -->
    <Section>
      <Container>
        <SectionTitle
          title="Discover the Advantages of Studying"
          subtitle="Why Choose Education in"
          :name="country.alias"
        />

        <CountryAdvantage :advantage-list="country.aboutCountry.advantages" />
      </Container>
    </Section>

    <!-- Video Testimonial -->
    <Section
      shape-color="grey"
    >
      <Container>
        <SectionTitle
          title="Basic country information"
          subtitle="Study in"
          :name="country.alias"
        />

        <VideoBlockB
          title="Our Product"
          :features="countryTestimonials"
          source="/assets/video/meeting.mp4"
          poster="/assets/demo/img/posters/poster-2h.jpg"
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

<script setup lang="ts">
import { countryTestimonials } from '../../../data/pages/country'
import { getCountry } from '/@src/utils/api/country'
import { type Country } from '/@src/types'
import { socialLinks } from '/@src/data/blocks/advanced/social'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string
// get country data
var country = ref<Country>()
async function fetchCountry() {
  try {
    country.value= await getCountry(slug)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchCountry)
onServerPrefetch(fetchCountry)
watch(() => route.fullPath, fetchCountry)

</script>

