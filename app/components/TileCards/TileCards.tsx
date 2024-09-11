import Link from 'next/link'

interface Props {
  cardTitleOne?: string
  cardContentOne?: string
  cardLinkOne?: string
  cardTitleTwo?: string
  cardContentTwo?: string
  cardLinkTwo?: string
  cardTitleThree?: string
  cardContentThree?: string
  cardLinkThree?: string
}

const TileCards = ({
  cardContentOne,
  cardTitleOne,
  cardLinkOne,
  cardTitleTwo,
  cardContentTwo,
  cardLinkTwo,
  cardTitleThree,
  cardContentThree,
  cardLinkThree,
}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10 py-14 lg:py-32 px-10 bg-[#16364D] text-white">
      <div className="text-center flex flex-col gap-8 justify-tiles items-center">
        <h2 className="text-[27px] max-w-[70%]">{cardTitleOne}</h2>
        <p className="max-w-[60%]">{cardContentOne}</p>
        <Link
          className="button mt-2"
          href={`/${cardLinkOne ? cardLinkOne : ''}`}
        >
          Läs mer
        </Link>
      </div>
      <div className="text-center flex flex-col justify-tiles gap-8 items-center">
        <h2 className="text-[27px] max-w-[100%] lg:max-w-[70%]">
          {cardTitleTwo}
        </h2>
        <p className="max-w-[100%] lg:max-w-[60%]">{cardContentTwo}</p>
        <Link
          className="button mt-2"
          href={`/${cardLinkTwo ? cardLinkTwo : ''}`}
        >
          Läs mer
        </Link>
      </div>
      <div className="text-center  flex flex-col justify-tiles gap-8 items-center">
        <h2 className="text-[27px] max-w-[100%] lg:max-w-[70%]">
          {cardTitleThree}
        </h2>
        <p className="max-w-[100%] lg:max-w-[60%]">{cardContentThree}</p>
        <Link
          className="button mt-2"
          href={`/${cardLinkThree ? cardLinkThree : ''}`}
        >
          Läs mer
        </Link>
      </div>
    </div>
  )
}

export default TileCards
