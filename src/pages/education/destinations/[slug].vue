<route lang="yaml">
  meta:
    layout: default
  </route>

<template>
  <div>
    <HeroC
      :subtitle="slug"
      title="Enrich Your Education  Prospects "
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ista vestra: Si gravis, brevis; Nos cum te, M. Iam id ipsum absurdum, maximum malum neglegi."
      cta="Learn more"
      to="/"
      image="/assets/demo/img/features/usa-photo.png"
      image-width="744"
      image-height="558"
      reverse
    />

    <!-- Institutions List Content Block -->
    <Section>
      <InstitutionContent
        title="Educational Institutions"
        :text="slug"
        link="/"
        :images="slug"
      />
    </Section>
  </div>
</template>

<script setup lang="ts">
// import { getCountry } from '/@src/utils/api/country'
// import { type Country } from '/@src/types'

const route = useRoute()
// const router = useRouter()
const slug = route.params.slug as string
console.log(slug);
// get country data
// const country = ref<Country>()
// async function fetchCountry() {
//   try {
//     country.value = await getCountry(slug)
//   } catch {
//     router.replace({
//       name: 'all',
//       params: { all: `not-found-${route.params.slug}` },
//     })
//   }
// }

// onMounted(fetchCountry)
// onServerPrefetch(fetchCountry)
// watch(() => route.fullPath, fetchCountry)

</script>

