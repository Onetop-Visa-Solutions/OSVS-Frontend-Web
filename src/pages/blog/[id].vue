<script setup lang="ts">
import { getPost } from '/@src/utils/api/blog'
import { socialLinks } from '/@src/data/blocks/advanced/social'

const route = useRoute()
const router = useRouter()

export interface PostGridItemAuthor {
  photo: string
  name: string
}
export interface PostItem {
  id: number
  author: PostGridItemAuthor
  category: string
  title: string
  abstract: string
  image: string
  content: string
  date: string
  duration: number
  related?: PostItem[]
}

const id = route.params.id as string
// get post data
var post = ref<PostItem>()
async function fetchPost() {
  try {
    post.value= await getPost(id)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.id}` },
    })
  }
}

onMounted(fetchPost)
onServerPrefetch(fetchPost)
watch(() => route.fullPath, fetchPost)



// const props = defineProps<SinglePostProps>()
</script>

<template>
  <div>
    <BlogPost
      :post="post"
      :centered="true"
    />
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

