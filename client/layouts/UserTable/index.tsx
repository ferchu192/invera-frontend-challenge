/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

// Components
import Table from '../../components/Table';

// Hooks
import { useUsers } from '../../src/hooks/useUsers';
import { userColumns } from './columns';

// Helpers
import { getRandomIntInclusive } from '../../helpers/helper';

const UserTable = () => {
  const useData = useUsers();

  const [data, setData] = useState<any>();
  const columns = userColumns(useData.deleteUser);

  /*
    -------------------- PAGINATION --------------------
  */
  // Update de queryParams
  const changeQueryParams = ({
    limit,
    pageNumber,
    searchText,
    sortColumn,
    sortOrder
  } : {
    limit?: number,
    pageNumber?: number,
    searchText?: string,
    sortColumn?: string,
    sortOrder?: 'asc' | 'desc'
  }) => {
    useData.refetch({
      _page: pageNumber,
      _limit: limit,
      q: searchText,
      _sort: sortColumn,
      _order: sortOrder,
    });
  }

  /*
    -------------------- FETCHING --------------------
  */
  useEffect(() => {
    if ((useData.users) && (!useData.loading)) {
      // Parse users

      const { users } = useData;
      const r = users.map((user: any) => ({
        user: {
          name: user.name,
          email: user.email,
          icon: getRandomIntInclusive(user.id),
        },
        phone: user.phone,
        location: user.location,
        company: {
          name: user.company,
          id: user.id,
        },
        status: user.status,
        actions: {
          id: user.id,
          name: user.name,
        },
      }));
      setData(r);
    }
  }, [useData.loading, useData.users]);

  /*
    -------------------- RENDER --------------------
  */
  return (
    <div id="table-container">
      {!data && (
        <div>
          <span className="text-primary text-center">Loading...</span>
        </div>
      )}
      <Table
        title="All Users"
        data={data}
        columns={columns}
        changeQueryParams={changeQueryParams}
        total={50}
      />
    </div>
  )
}

export default UserTable;