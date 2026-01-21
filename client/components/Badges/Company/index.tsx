import { getRandomIntInclusive } from '../../../helpers/helper';

export interface CompanyBadgeProps {
  company: {
    name: string;
    id: number;
  };
}

const CompanyBadge = ({ company }: CompanyBadgeProps) => {
  return (
    <div className="flex text-primary items-center gap-[8px]">
      <img src={`public/company/${getRandomIntInclusive(company.id)}.svg`} alt={company.name} className="w-[20px] h-[20px]" />
      <span>{company.name}</span>
    </div>
  )
}

export default CompanyBadge;