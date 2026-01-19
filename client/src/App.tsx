import { useState, useEffect } from 'react';
import {Ringchart} from '../components/Ringchart';
import { useUserTypes } from './hooks/useUserTypes';

// Types
import { RingData } from '../components/Ringchart/types';
import { Distribution } from '../src/types/api';

const COLORS = ['#7B99FF', '#C9D7FD', '#28E384'];

function App() {
  const [rings, setRings] = useState<RingData[]>([]);
  const [total, setTotal] = useState<number>(0);
  const useData = useUserTypes();

  useEffect(() => {
    const data = useData.userTypes;

    // Parse rings
    const r = data?.distribution?.map((ring: Distribution, index: number) => ({
      value: ring.percentage/100,
      color: COLORS[index],
      label: ring.type,
    }));

    setRings(r || []);
    setTotal(data?.totalUsers || 0);
  }, [useData.userTypes]);

  return (
    <div className="w-full min-h-screen bg-bg-page">
      <Ringchart
        rings={rings}
        total={total}
        type="Users"
        title="Estadistics"
        size={200}
        ringWidth={8}
        gapBetweenRings={4}
      />
    </div>
  )
}

export default App
