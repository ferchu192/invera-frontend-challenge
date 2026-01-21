interface CardProps {
  title: string,
  count: number,
  iconPath: string
}

function Card({ title, count, iconPath }: CardProps) {
  return (
    <>
      <div className="w-full max-w-[398px] rounded-lg border-[0.6px] border-[#5F5F5F] bg-[#1A1A1A] p-5">
        <div className="flex justify-between items-center">
          <div className='flex gap-2.5 text-left'>
            <img src={iconPath} alt="icon" className="w-[48px] h-[48px]" />
            <div className="flex flex-col text-left">
              <span className='font-[600] text-[#BABABA]'>{title}</span>
              <span className='font-[300] text-[#BABABA]'>{count}</span>
            </div>
          </div>
          <div className="rotate-90 tracking-[2px]">...</div>
        </div>
      </div>
    </>
  )
}

export default Card;
