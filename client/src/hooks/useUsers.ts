import { useState, useEffect } from 'react';
import { api } from '../services/api';
import type { User, PaginationParams } from '../types/api';

interface UseUsersResult {
  users: User[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Custom hook to fetch and manage users list
 * @param params - Optional pagination and filter parameters
 * @returns Object with users, loading state, error, and refetch function
 */
export const useUsers = (params?: PaginationParams): UseUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.users.getAll(params);
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch users'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [JSON.stringify(params)]);

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
  };
};
