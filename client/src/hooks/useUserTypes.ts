import { useState, useEffect } from 'react';
import { api } from '../services/api';
import type { UserType } from '../types/api';

interface UseUserTypesResult {
  userTypes: UserType | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Custom hook to fetch user types for ring chart
 * @returns Object with user types data, loading state, error, and refetch function
 */
export const useUserTypes = (): UseUserTypesResult => {
  const [userTypes, setUserTypes] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUserTypes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.userTypes();
      setUserTypes(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch user types'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserTypes();
  }, []);

  return {
    userTypes,
    loading,
    error,
    refetch: fetchUserTypes,
  };
};
