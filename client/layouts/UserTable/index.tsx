/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

// Components
import Table from '../../components/Table';

// Hooks
import { useUsers } from '../../src/hooks/useUsers';

import { userColumns as columns } from '../../components/Table/columns';

// Helpers
import { getRandomIntInclusive } from '../../helpers/helper';

const UserTable = () => {
  const useData = useUsers();

  const [data, setData] = useState<any>();

  /*
    -------------------- PAGINATION --------------------
  */
  // Update de queryParams
  const changeQueryParams = ({ limit, pageNumber } : { limit?: number, pageNumber?: number }) => {
    useData.refetch({
      _page: pageNumber,
      _limit: limit,
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
          icon: getRandomIntInclusive(),
        },
        phone: user.phone,
        location: user.location,
        company: user.company,
        status: user.status,
        actions: 'View Details',
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
          <span className="text-white text-center">Loading...</span>
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