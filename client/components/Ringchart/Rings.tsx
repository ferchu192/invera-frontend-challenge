import React from 'react';
import { RingData } from './types';

interface RingsProps {
  rings: RingData[];
  total: number;
  type: string;
  size?: number;
  ringWidth?: number;
  gapBetweenRings?: number;
}

export const Rings: React.FC<RingsProps> = ({
  rings,
  total,
  type,
  size = 200,
  ringWidth = 16,
  gapBetweenRings = 4,
}) => {
  const center = size / 2;
  const grayColor = '#5F5F5F';

  const createRingPath = (radius: number, percentage: number): string => {
    const startAngle = 180;
    const endAngle = startAngle + (360 * percentage);

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);

    const largeArcFlag = percentage > 0.5 ? 1 : 0;

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  };

  return (
    <div className="inline-block">
      <svg width={size} height={size} className="overflow-visible">
        {rings.map((ring, index) => {
          const radius = center - (ringWidth / 2) - (index * (ringWidth + gapBetweenRings));
          const percentage = Math.min(ring.value / ring.maxValue, 1);

          return (
            <g key={index}>
              {/* Background ring (gray) */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={grayColor}
                strokeWidth={ringWidth}
              />

              {/* Colored ring (value) */}
              {percentage > 0 && (
                <path
                  d={createRingPath(radius, percentage)}
                  fill="none"
                  stroke={ring.color}
                  strokeWidth={ringWidth}
                />
              )}
            </g>
          );
        })}

        {/* Center text */}
        <text
          x={center}
          y={center}
          textAnchor="middle"
          className="text-[28px] font-bold fill-white"
        >
          {total}
        </text>
        <text
          x={center}
          y={center + 20}
          textAnchor="middle"
          className="text-sm font-medium fill-white"
        >
          {type}
        </text>
      </svg>
    </div>
  );
};
