import Author from './author'
import Tag from './tag'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  tags: Tag[]
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
