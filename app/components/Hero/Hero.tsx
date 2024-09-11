import Image from 'next/image'

interface Props {
  img: any
  alt?: any
  title?: string
  homeDesign?: any
}

const Hero = ({ img, alt, title, homeDesign }: Props) => {
  return homeDesign
    ? null
    : img && (
        <div className="relative h-[60vh] w-full flex items-center justify-center">
          {title && (
            <div className="absolute h-full w-full flex items-center justify-center">
              <h1 className="text-[70px] text-white text-center z-10">
                {title}
              </h1>
            </div>
          )}
          <Image className="object-cover" src={img} fill alt={alt || 'image'} />
        </div>
      )
}

export default Hero
