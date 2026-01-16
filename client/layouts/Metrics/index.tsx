import Card from '../../components/Card';

function MetricsLayout() {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[24px] place-items-center">
        <Card title="Total Users" count={260} iconPath='public/users.svg'/>
        <Card title="New Users" count={15} iconPath='public/single_user.svg' />
        <Card title="Top Users" count={200} iconPath='public/top_user.svg' />
        <Card title="Other Users" count={36}  iconPath='public/other_user.svg' />
      </div>
  )
}

export default MetricsLayout
