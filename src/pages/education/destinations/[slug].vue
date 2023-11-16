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
    <Section>
      <InstitutionContent
        title="Educational Institutions In"
        :text="country.name"
        link="/"
        :images="country.educationalPackage.institutions"
      />
    </Section>

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
  </div>
</template>

<script setup lang="ts">
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

