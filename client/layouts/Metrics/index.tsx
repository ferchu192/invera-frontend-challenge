import { useState, useEffect } from 'react';

// Hooks
import { useStatistics } from '../../src/hooks/useStatistics';

// Types
import { Statistics } from '../../src/types/api';

// Components
import Card from '../../components/Card';

function MetricsLayout() {
  const useStatisticsData = useStatistics();
  const [statistics, setStatistics] = useState<Statistics | null>(null);

  useEffect(() => {
    const data = useStatisticsData.statistics;
    setStatistics(data);
  }, [useStatisticsData.statistics]);

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20">
        <Card loading={useStatisticsData.loading} title="Total Users" count={statistics?.totalUsers || 0} iconPath={`${import.meta.env.BASE_URL}users/users.svg`}/>
        <Card loading={useStatisticsData.loading} title="New Users" count={statistics?.newUsers || 0} iconPath={`${import.meta.env.BASE_URL}users/single_user.svg`} />
        <Card loading={useStatisticsData.loading} title="Top Users" count={statistics?.topUsers || 0} iconPath={`${import.meta.env.BASE_URL}users/top_user.svg`} />
        <Card loading={useStatisticsData.loading} title="Other Users" count={statistics?.otherUsers || 0}  iconPath={`${import.meta.env.BASE_URL}users/other_user.svg`} />
      </div>
  )
}

export default MetricsLayout
