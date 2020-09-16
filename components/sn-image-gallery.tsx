import { useState } from 'react';
import Link from 'next/link'

// Lightbox(image modal)
import Lightbox from 'react-image-lightbox';


type Props = {
  images: Array<any>
  index: number
  handleToggle: any
}

const ImageGallery = ({
  images,
  index,
  handleToggle
}: Props) => {

    const [photoIndex, setPhotoIndex] = useState(index);
    // const [isOpen, setIsOpen] = useState(true);
    
    return (
        <div>
            {images.length &&
                <Lightbox
                mainSrc={images[photoIndex].src}
                nextSrc={images[(photoIndex + 1) % images.length].src}
                prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
                onCloseRequest={() => handleToggle()}
                onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                }
                // discourageDownloads={true}
                imageTitle={images[photoIndex].title}
                imageCaption={images[photoIndex].caption}
                />
            }
        </div>
    )
}

export default ImageGallery