/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

// Components
import MUIDataTable from "mui-datatables";
import { TextField, Box, Typography, InputAdornment } from '@mui/material';

// Footer
import CustomFooter from './CustomFooter';

import { userColumns as columns } from './columns';

interface TableProps {
  title: string;
  //   columns: any;
}

const DATA = [
  {
    "user": { "name": "John Doe", "email": "john@example.com", "icon": "avatar_1" },
    "phone": "(123) 456-7890",
    "location": "New York",
    "company": "Google",
    "status": "ONLINE",
    "actions": "View Details"
  },
  {
    "user": { "name": "Jana Doe", "email": "john@example.com", "icon": "avatar_2" },
    "phone": "(123) 456-7890",
    "location": "New York",
    "company": "YouTube",
    "status": "OFFLINE",
    "actions": "View Details"
  },
  {
    "user": { "name": "John Doe", "email": "john@example.com", "icon": "avatar_3" },
    "phone": "(123) 456-7890",
    "location": "New York",
    "company": "Facebook",
    "status": "OFFLINE",
    "actions": "View Details"
  },
  {
    "user": { "name": "Jone Doe", "email": "john@example.com", "icon": "avatar_3" },
    "phone": "(123) 456-7890",
    "location": "New York",
    "company": "Twitter",
    "status": "ONLINE",
    "actions": "View Details"
  },
]

const Table = ({
  title,
  //   columns,
}: TableProps) => {
  const [data, setData] = useState<any>(DATA);
  const [queryParams, setQueryParams] = useState<any>();
  const [loading, setLoading] = useState<boolean>();
  const [searchText, setSearchText] = useState<string>('');

  /*
  -------------------- PAGINATION --------------------
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  // Update de queryParams
  const changeQueryParams = ({ limit, pageNumber } : { limit?: number, pageNumber?: number }) => {
    setQueryParams((prevState: any) => ({
      ...prevState,
      offset: pageNumber ? pageNumber * rowsPerPage : page,
      limit: limit ? limit : rowsPerPage,
    }))
  }

  const onChangePage = (newPage : number) => {
    setPage(newPage);
    changeQueryParams({ pageNumber: newPage });
  };

  const onChangeRowsPerPage = (numberOfRows: number) => {
    setRowsPerPage(numberOfRows);
    changeQueryParams({ limit: numberOfRows });
  };

  /*
    -------------------- TABLE OPTIONS --------------------
  */
  const options = useMemo(() => ({
    filter: false,
    sort: false,
    search: false,
    searchText: searchText,
    searchOpen: false,
    download: false,
    print: false,
    viewColumns: false,
    // selectableRows: 'none',
    page: 0,
    rowsPerPage: 10,
    // serverSide: true,
    // onChangePage,
    // onChangeRowsPerPage,
    // customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => {
    //   return (
    //     <CustomFooter
    //       page={page}
    //       rowsPerPage={rowsPerPage}
    //       changeRowsPerPage={changeRowsPerPage}
    //       changePage={changePage}
    //       textLabels={textLabels}
    //       onChangePage={onChangePage}
    //       onChangeRowsPerPage={onChangeRowsPerPage}
    //       hasNextPage
    //     />
    //   );
    // },
    customToolbar: () => null,
    setRowProps: (row: any, dataIndex: number) => ({
      style: {
        backgroundColor: dataIndex % 2 === 0 ? '#212121' : '#1a1a1a',
        borderBottom: '1px solid #5F5F5F',
      },
    }),
    textLabels: {
      body: {
        noMatch: ' ',
      },
    },
  }), [loading, searchText]);

  /*
    -------------------- FETCHING --------------------
  const fetchData = async () => {
    setLoading(true);
    try {
      const parsed = await getTransfers(queryParams, state.chain);
      setData(parsed);
    } catch (error) {
      console.error("Error fetching user profile", error);
      throw error;
    }
    actions.endRefetch();
    setLoading(false);
  }

  // En caso de que se oprima el boton de GET DATA
  useEffect(() => {
    if (state.refetch) {
      changeQueryParams({
        limit: rowsPerPage,
        pageNumber: 0,
        chain: state.chain.chain,
        address: state.address,
      })
    }
  }, [state.refetch]);

  useEffect(() => {
    if (queryParams) fetchData();
  }, [queryParams]);

  /*
    -------------------- CUSTOM TITLE --------------------
  */
  const customTitle = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
        All Users
         {/* {title} */}
      </Typography>
      <TextField
        placeholder="Search for..."
        variant="outlined"
        size="small"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src="public/table/search.svg" alt="search" style={{ width: '20px', height: '20px' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: '352px',
          height: '42px',
          fontSize: '12px',
          '@media (max-width: 430px)': {
            width: '217px',
          },
          '& .MuiOutlinedInput-root': {
            height: '42px',
            color: '#fff',
            backgroundColor: '#2a2a2a',
            '& fieldset': {
              borderColor: '#5F5F5F',
            },
            '&:hover fieldset': {
              borderColor: '#fff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#9e9e9e',
            opacity: 1,
          },
        }}
      />
    </Box>
  );

  /*
    -------------------- RENDER --------------------
  */
  return (
    <div id="table-container">
      {loading && (
        <div>
          <span className="text-white text-center">Loading...</span>
        </div>
      )}
      <MUIDataTable
        title={customTitle}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  )
}

const colummnObjectShape = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.object,
};

Table.defaultProps = {
  title: 'All Users',
};

Table.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape(colummnObjectShape)).isRequired,
};

export default Table;