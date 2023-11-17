<route lang="yaml">
  meta:
    layout: default
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
      <PageTitle
        title="Requirements for Programs"
        subtitle="Basic Requirements"
        :text="country.educationalPackage.requirementsDescription"
      />
      <RequirementsListE
        :requirements-item="country.educationalPackage.requirements"
      />
    </Section>

    <!-- Why This Country Section -->
    <Section>
      <Container>
        <SectionTitle
          title="Discover the Advantages of Studying"
          :name="country.name"
          subtitle="Why Choose Education in"
        />

        <CountryAdvantage :advantage-list="country.aboutCountry.advantages" />
      </Container>
    </Section>

    <!-- Video Testimonial -->
    <Section
      wave="wave-1"
      shape-color="grey"
    >
      <Container>
        <SectionTitle
          title="Words from our clients"
          subtitle="Testimonial"
        />

        <VideoBlockB
          title="Our Product"
          :features="countryTestimonials"
          source="/assets/video/meeting.mp4"
          poster="/assets/demo/img/posters/poster-2h.jpg"
        />
      </Container>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { countryTestimonials } from '../../../data/pages/country'
import { getCountry } from '/@src/utils/api/country'
import { type Country } from '/@src/types'
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

