<template>
  <div>
    <Section overflown>
      <Container v-if="requirement">
        <RequirementDetails :requirement="requirement" />
      </Container>
    </Section>
  </div>
</template>


<script setup lang="ts">
import { getRequirement } from '../../../../utils/api/country'
// import { socialLinks } from '/@src/data/blocks/advanced/social'
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

