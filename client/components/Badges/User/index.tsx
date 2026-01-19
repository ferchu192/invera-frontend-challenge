export interface UserBadgeProps {
  name: string;
  email: string;
  icon: string;
}           

const UserBadge = ({ name, email, icon } : UserBadgeProps) => {
  return (
    <div className="flex items-center gap-[8px]">
      <img src={`public/avatars/${icon}.svg`} alt={icon} className="w-[30px] h-[30px]" />
      <div className="flex flex-col">
        <span className="text-secondary font-semibold text-[11px]">{name}</span>
        <span className="text-primary text-[11px] font-normal">{email}</span>
      </div>
    </div>
  )
}

export default UserBadge;
