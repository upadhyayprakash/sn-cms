import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'
import Tag from '../types/tag'

type Props = {
  title: string
  coverImage: string
  tags: Tag[]
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, tags, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden lg:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} tags={tags} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl">
        <div className="flex lg:hidden mb-6 justify-center">
          <Avatar name={author.name} picture={author.picture} tags={tags} />
        </div>
        <div className="mb-6 text-lg sm:text-left mx-lg:text-center">
          <DateFormater dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
