import React from 'react';
import { Rings } from './Rings';
import { Legend } from './Legend';
import { RingchartProps } from './types';

export const Ringchart: React.FC<RingchartProps> = ({
  rings,
  total,
  title,
  type,
  size,
  ringWidth,
  gapBetweenRings,
}) => {
  return (
    <div className="flex gap-8 flex-col w-full">
      <span className='text-primary text-md font-bold text-[24px]'>
        {title}
      </span>
      <div className="flex flex-col sm:flex-row justify-around items-center gap-8">
        <Rings
          rings={rings}
          total={total}
          type={type}
          size={size}
          ringWidth={ringWidth}
          gapBetweenRings={gapBetweenRings}
        />
        <Legend rings={rings} total={total} />
      </div>
    </div>
  );
};

export type { RingData, RingchartProps } from './types';
