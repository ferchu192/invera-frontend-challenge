interface CardProps {
    title: string,
    count: number
}

function Card({ title, count }: CardProps) {
  return (
    <>
      <div className="min-w-[242px] rounded-lg border-[0.6px] border-[#5F5F5F] bg-[#1A1A1A] p-5">
        <div className="flex justify-between items-center">
          <div className='flex gap-2.5 text-left'>
          <div className="w-10 h-10 bg-red-500 border-[0.6px] border-green-500" />
          <div className="flex flex-col">
            <span className='font-semibold text-[#BABABA]'>{title}</span>
            <span className='font-light text-[#BABABA]'>{count}</span>
          </div>
          </div>
          <div className="rotate-90 tracking-[2px]">...</div>
        </div>
      </div>
    </>
  )
}

export default Card;
