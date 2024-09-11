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
    <div className={`${pageDesign ? 'bg-[#E9EFED]' : 'container m-auto'}`}>
      <div
        className={`${
          pageDesign
            ? 'flex grid grid-cols-1 p-5 lg:p-0 lg:grid-cols-[55%_45%] items-center gap-14'
            : 'my-10 lg:my-24 grid gap-10 lg:gap-20 px-5 lg:px-20 mx-auto grid-cols-1 lg:grid-cols-2 items-center'
        }`}
      >
        <div
          className={`w-full relative h-[300px] ${
            pageDesign ? 'lg:h-[800px]' : 'lg:h-[600px]'
          } `}
        >
          <Image
            src={image || ''}
            alt={imageID || ''}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid gap-10 ml-5">
          {pageDesign ? (
            <h2
              className={`${'text-[29px] max-w-[100%] lg:max-w-[70%] font-light leading-[35px]'}`}
            >
              {title}
            </h2>
          ) : (
            <h3
              className={`${'text-[39px] lg:text-[35px] max-w-[100%] lg:max-w-[90%] font-light leading-[35px] lg:leading-[35px]'}`}
            >
              {title}
            </h3>
          )}
          <span className="text-[17px] flex flex-col gap-5 max-w-[100%] lg:max-w-[80%] font-light">
            {render(content)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ImageText
