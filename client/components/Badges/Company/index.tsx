export interface CompanyBadgeProps {
  company: string;
}

const CompanyBadge = ({ company } : CompanyBadgeProps) => {
  return (
    <div className="flex text-primary items-center gap-[8px]">
      <img src={`public/company/${company}.svg`} alt={company} className="w-[20px] h-[20px]" /> 
      <span>{company}</span>
    </div>
  )
}

export default CompanyBadge;