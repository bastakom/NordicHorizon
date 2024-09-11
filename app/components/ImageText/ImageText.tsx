import Image from 'next/image'
import { render } from 'storyblok-rich-text-react-renderer'

interface Props {
  pageDesign?: any
  image?: string
  imageID?: string
  title?: string
  content?: any
}

const ImageText = ({ pageDesign, image, imageID, title, content }: Props) => {
  return (
    <div className={`${pageDesign ? 'bg-[#E9EFED]' : 'container m-auto '}`}>
      <div
        className={`${
          pageDesign
            ? 'flex grid grid-cols-[55%_45%] items-center gap-10'
            : 'my-24 grid gap-20 px-20 mx-auto grid-cols-2 items-center'
        }`}
      >
        <div className="w-full relative h-[600px]">
          <Image
            src={image || ''}
            alt={imageID || ''}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid gap-10">
          <h2
            className={`${
              pageDesign
                ? 'text-[35px] max-w-[70%] font-light leading-[42px]'
                : 'text-[57px] max-w-[90%] font-light leading-[68px]'
            }`}
          >
            {title}
          </h2>
          <span className="text-[20px] flex flex-col gap-5 max-w-[80%] font-light">
            {render(content)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ImageText
