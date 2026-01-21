import type { User, Statistics, UserType, PaginationParams } from '../types/api';

const API_BASE_URL = 'http://localhost:8000';

/**
 * Utility function to build query string from parameters
 */
const buildQueryString = (params?: Record<string, unknown>): string => {
  if (!params) return '';
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
};

/**
 * Generic fetch wrapper with error handling
 */
const fetchAPI = async <T>(url: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * API service for interacting with json-server
 */
export const api = {
  /**
   * User endpoints
   */
  users: {
    /**
     * Get all users with optional pagination, search, sorting and filtering
     * @param params - Query parameters for pagination, search, sorting and filtering
     * @returns Promise with array of users
     */
    getAll: (params?: PaginationParams): Promise<User[]> => {
      const queryString = buildQueryString(params);
      return fetchAPI<User[]>(`${API_BASE_URL}/users${queryString}`);
    },

    /**
     * Get a single user by ID
     * @param id - User ID
     * @returns Promise with user data
     */
    getById: (id: number | string): Promise<User> => {
      return fetchAPI<User>(`${API_BASE_URL}/users/${id}`);
    },

    /**
     * Create a new user
     * @param data - User data to create
     * @returns Promise with created user
     */
    create: (data: Omit<User, 'id'>): Promise<User> => {
      return fetchAPI<User>(`${API_BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },

    /**
     * Update an existing user
     * @param id - User ID
     * @param data - Partial user data to update
     * @returns Promise with updated user
     */
    update: (id: number | string, data: Partial<User>): Promise<User> => {
      return fetchAPI<User>(`${API_BASE_URL}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    },

    /**
     * Delete a user
     * @param id - User ID
     * @returns Promise with empty response
     */
    delete: (id: number | string): Promise<void> => {
      return fetchAPI<void>(`${API_BASE_URL}/users/${id}`, {
        method: 'DELETE',
      });
    },
  },

  /**
   * Get general statistics
   * @returns Promise with statistics data
   */
  statistics: (): Promise<Statistics> => {
    return fetchAPI<Statistics>(`${API_BASE_URL}/statics`);
  },

  /**
   * Get user types for ring chart
   * @returns Promise with user types data
   */
  userTypes: (): Promise<UserType> => {
    return fetchAPI<UserType>(`${API_BASE_URL}/userTypes`);
  },
};
