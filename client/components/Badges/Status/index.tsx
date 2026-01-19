export interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  if (status === 'ONLINE') {
    return (
      <div className="w-[fit-content] text-primary flex items-center gap-[4px] rounded-[2px] border-[0.4px] border-[#C3F5CD80] pt-[2px] pb-[2px] pl-[6px] pr-[6px] bg-badge-online-bg">
        <div className="w-[3px] h-[3px] rounded-full bg-[#C3F5CD]"></div>
        <span className="text-white">Online</span>
      </div>
    )

  }
  return (
    <div className="w-[fit-content] text-primary text-primary flex items-center gap-[4px] rounded-[2px] border-[0.4px] border-primary pt-[2px] pb-[2px] pl-[6px] pr-[6px] bg-badge-offline-bg">
      <div className="w-[6px] h-[6px] rounded-full bg-primary"></div>
      <span className="text-white">Offline</span>
    </div>
  )
}

export default StatusBadge;