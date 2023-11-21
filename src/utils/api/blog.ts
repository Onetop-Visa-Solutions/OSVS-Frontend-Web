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
  related?: PostItem[]
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

