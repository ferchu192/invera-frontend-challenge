interface ColumnHeaderProps {
  label: string;
  icon: string;
}

const ColumnHeader = ({ label, icon } : ColumnHeaderProps) => {
  return (
    <div className="flex items-center gap-2">
      <img src={`public/table/${icon}.svg`} alt={icon} className="w-3 h-3" />
      <span>{label}</span>
    </div>
  )
}

export default ColumnHeader;
