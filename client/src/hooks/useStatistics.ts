import { useState, useEffect } from 'react';
import { api } from '../services/api';
import type { Statistics } from '../types/api';

interface UseStatisticsResult {
  statistics: Statistics | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Custom hook to fetch general statistics
 * @returns Object with statistics data, loading state, error, and refetch function
 */
export const useStatistics = (): UseStatisticsResult => {
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchStatistics = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.statistics();
      setStatistics(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch statistics'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  return {
    statistics,
    loading,
    error,
    refetch: fetchStatistics,
  };
};
