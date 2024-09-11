'use client'
import Image from 'next/image'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import Slider from 'react-slick'
import { useState } from 'react'

const Gallery = ({ data }: any) => {
  const [sliderRef, setSliderRef] = useState<any>(null)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="my-10 px-10">
      <Slider ref={setSliderRef} {...settings}>
        {data.map((item: any) => (
          <div key={item.id} className="px-2">
            <Image
              src={item.filename}
              width={500}
              height={500}
              className="object-cover h-[500px]"
              alt={item.filename}
            />
          </div>
        ))}
      </Slider>

      <div className="flex justify-center mt-4 space-x-0">
        <button onClick={() => sliderRef.slickPrev()}>
          <MdKeyboardArrowLeft size={50} />
        </button>
        <button onClick={() => sliderRef.slickNext()}>
          <MdKeyboardArrowRight size={50} />
        </button>
      </div>
    </div>
  )
}

export default Gallery
