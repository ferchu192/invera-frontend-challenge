export interface CompanyBadgeProps {
  company: {
    name: string;
  };
}

const CompanyBadge = ({ company }: CompanyBadgeProps) => {
  return (
    <div className="flex text-primary items-center gap-[8px]">
      <img src={`${import.meta.env.BASE_URL}company/${company.name}.svg`} alt={company.name} className="w-[20px] h-[20px]" />
      <span>{company.name}</span>
    </div>
  )
}

export default CompanyBadge;