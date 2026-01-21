export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  status: 'Online' | 'Offline';
}

export interface Statistics {
  totalUsers: number;
  newUsers: number;
  topUsers: number;
  otherUsers: number;
}

export interface Distribution {
  type: string;
  percentage: number;
}

export interface UserType {
  distribution: Distribution[];
  totalUsers: number;
}

export interface PaginationParams {
  _page?: number;
  _limit?: number;
  q?: string;
  _sort?: string;
  _order?: 'asc' | 'desc';
  status?: 'Online' | 'Offline';
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
