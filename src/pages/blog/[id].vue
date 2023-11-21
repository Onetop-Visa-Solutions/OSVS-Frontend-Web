<script setup lang="ts">
import { getPost } from '/@src/utils/api/blog'

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
  </div>
</template>

