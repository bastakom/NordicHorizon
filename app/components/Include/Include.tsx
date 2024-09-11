import Link from 'next/link'

interface Props {
  include: any
}

const Include = ({ include }: Props) => {
  return (
    <div className="flex flex-col justify-center  bg-[#16364D] py-24 px-10 gap-14 text-white">
      <h2 className="uppercase text-center text-[27px] font-light">Vad ingår i paketet?</h2>
      <div className="flex flex-wrap justify-center gap-10  bg-[#16364D] text-white">
        {include.map((item: string) => {
          return (
            <div className="text-[20px] border-2 border-[#B18B52] min-w-[150px] px-5 py-3 text-center rounded-[14px]">
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Include
