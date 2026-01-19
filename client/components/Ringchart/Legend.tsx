import React from 'react';
import { RingData } from './types';

interface LegendProps {
  rings: RingData[];
  total: number;
}

export const Legend: React.FC<LegendProps> = ({ rings, total }) => {
  return (
    <div className="flex flex-col gap-3">
      {rings.map((ring, index) => {
        const percentage = Math.round((ring.value / total) * 100);

        return (
          <div key={index} className="grid grid-cols-[1fr_auto] items-center gap-4 min-w-[200px]">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: ring.color }}
              ></span>
              <span className="text-sm font-normal text-white">{ring.label}</span>
            </div>
            <div className="text-sm font-semibold text-white text-right">{percentage}%</div>
          </div>
        );
      })}
    </div>
  );
};
