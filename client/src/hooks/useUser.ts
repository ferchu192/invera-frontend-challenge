import { useState, useEffect } from 'react';
import { api } from '../services/api';
import type { User } from '../types/api';

interface UseUserResult {
  user: User | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Custom hook to fetch a single user by ID
 * @param id - User ID
 * @returns Object with user data, loading state, error, and refetch function
 */
export const useUser = (id: number | string | null): UseUserResult => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUser = async () => {
    if (!id) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await api.users.getById(id);
      setUser(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch user'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return {
    user,
    loading,
    error,
    refetch: fetchUser,
  };
};
