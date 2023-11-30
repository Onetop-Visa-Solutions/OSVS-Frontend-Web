<template>
  <div>
    <Section overflown>
      <Container v-if="requirement">
        <RequirementDetails :requirement="requirement" />
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
import { getRequirement } from '../../../../utils/api/country'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import {onMounted, onServerPrefetch, watch, ref} from 'vue'
const route = useRoute()
const router = useRouter()
var id = route.params.name as string
// get job data
const requirement = ref<any>()
async function fetchRequirement() {
  try {
    requirement.value = await getRequirement(id)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchRequirement)
onServerPrefetch(fetchRequirement)
watch(() => route.fullPath, fetchRequirement)
</script>

