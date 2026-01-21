// Interface
import { UserBadgeProps } from '../../components/Badges/User';

// Components
import UserBadge from '../../components/Badges/User';
import CompanyBadge from '../../components/Badges/Company';
import StatusBadge from '../../components/Badges/Status';
import ColumnHeader from '../../components/Table/ColumnHeader';
import ActionColumn from '../../components/Table/ActionColumn';
import { ActionProps } from '../../components/Table/ActionColumn';

export const userColumns = (onDelete: (id: number | string) => Promise<void>) => [
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
    name: 'actions',
    label: '',
    options: {
      sort: false,
      customBodyRender: (value: ActionProps) => {
        return <ActionColumn id={value.id} name={value.name} onDelete={onDelete} />
      },
    }
  },
];