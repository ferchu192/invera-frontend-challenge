export interface RingData {
  value: number;
  color: string;
  label: string;
}

export interface RingchartProps {
  rings: RingData[];
  total: number;
  title: string;
  size?: number;
  ringWidth?: number;
  gapBetweenRings?: number;
  type: string;
}
