import { useState, useEffect } from 'react';
import { api } from '../services/api';
import type { User, PaginationParams } from '../types/api';

interface UseUsersResult {
  users: User[];
  loading: boolean;
  error: Error | null;
  refetch: (queryParams: PaginationParams) => void;
  fetchUser: (id: number | string | null) => void;
  deleteUser: (id: number | string) => Promise<void>;
}

/**
 * Custom hook to fetch and manage users list
 * @param params - Optional pagination and filter parameters
 * @returns Object with users, loading state, error, and refetch function
 */
export const useUsers = (params?: PaginationParams): UseUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [currentParams, setCurrentParams] = useState<PaginationParams>(params || { _page: 0, _limit: 10 });

  const fetchUsers = async (queryParams: PaginationParams) => {
    try {
      setLoading(true);
      setError(null);
      setCurrentParams(queryParams);
      const data = await api.users.getAll(queryParams);
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch users'));
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async (id: number | string | null) => {
    if (!id) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await api.users.getById(id);
      setUser(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch user'));
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number | string) => {
    try {
      setLoading(true);
      setError(null);
      await api.users.delete(id);
      // Refetch users with current params
      await fetchUsers(currentParams);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete user'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!params) {
      fetchUsers({
        _page: 0,
        _limit: 10,
      })
    } else fetchUsers(params);
  }, [JSON.stringify(params)]);

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
    fetchUser,
    deleteUser,
  };
};
