import Tag from '../types/tag';

type Props = {
  name: string
  picture: string
  tags: Tag[]
}

const Avatar = ({ name, picture, tags }: Props) => {
  return (    
    <div className="flex md:justify-between mx-lg:flex-col lg:flex-row sm:items-center">
      <div className="flex items-center flex-col lg:flex-row">
        <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
        <div className="text-xl font-bold">{name}</div>
      </div>
      <div className="tags-container mx-lg:text-center lg:text-left">
        {tags.map((tag) => (
          <a href="#"><span>{tag}</span></a>
        ))}
      </div>
    </div>
  )
}

export default Avatar
