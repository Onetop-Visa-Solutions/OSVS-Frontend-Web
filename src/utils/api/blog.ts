import { posts } from '/@src/data/pages/blog'
import sleep from '/@src/utils/sleep'
interface PostGridItemAuthor {
  photo: string
  name: string
}
interface PostItem {
  id: number
  author: PostGridItemAuthor
  category: string
  title: string
  abstract: string
  image: string
  content: string
  date: string
  duration: number
  related?: number[]
}

export async function getPost(id: string) {
  const post = posts.find((post: PostItem) => post.id.toString() === id)
  console.log(post);
  // simulate api call
  await sleep(200)

  if (!post) {
    return Promise.reject(new Error(`Post ${id} not found`))
  }

  return Promise.resolve(post)
}


export async function getRelatedPost(id: string) {
  const relatedPostsList = reactive([])
  const relatedPosts = posts.find((post: PostItem) => post.id.toString() === id)
  console.log(relatedPosts);
  // simulate api call
  await sleep(200)

  if (!relatedPostsList) {
    return Promise.reject(new Error(`Post ${id} not found`))
  }

  return Promise.resolve(relatedPostsList)
}
