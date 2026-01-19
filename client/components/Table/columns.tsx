// Interface
import { UserBadgeProps } from '../Badges/User';

// Components
import UserBadge from '../Badges/User';
import CompanyBadge from '../Badges/Company';
import StatusBadge from '../Badges/Status';
import ColumnHeader from './ColumnHeader';
import ActionColumn from './ActionColumn';

export const userColumns = [
  {
    name: 'user',
    label: 'Name',
    options: {
      customHeadLabelRender: () =>
      (
        <ColumnHeader label="Name" icon="name" />
      ),
      customBodyRender: (value: UserBadgeProps) => <UserBadge name={value.name} email={value.email} icon={value.icon} />,
    }
  },
  {
    name: 'phone',
    label: 'Phone',
    options: {
      customHeadLabelRender: () =>
      (
        <ColumnHeader label="Phone" icon="phone" />
      ),
      customBodyRender: (value: string) => <span className="text-primary weith">{value}</span>,
    }
  },
  {
    name: 'location',
    label: 'Location',
    options: {
      customHeadLabelRender: () =>
      (
        <ColumnHeader label="Location" icon="location" />
      ),
      customBodyRender: (value: string) => <span className="text-primary">{value}</span>,
    }
  },
  {
    name: 'company',
    label: 'Company',
    options: {
      customHeadLabelRender: () =>
      (
        <ColumnHeader label="Company" icon="company" />
      ),
      customBodyRender: (value: string) => <CompanyBadge company={value} />,
    }
  },
  {
    name: 'status',
    label: 'Status',
    options: {
      customHeadLabelRender: () =>
      (
        <ColumnHeader label="Status" icon="status" />
      ),
      customBodyRender: (value: string) => <StatusBadge status={value} />,
    }
  },
  {
    name: '',
    label: '',
    options: {
      sort: false,
      customBodyRender: () => <ActionColumn />,
    }
  },
];