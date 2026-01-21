/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo } from 'react';

// Components
import MUIDataTable from "mui-datatables";
import { TextField, Box, Typography, InputAdornment } from '@mui/material';

// Footer
// import CustomFooter from './CustomFooter';

import { userColumns as columns } from './columns';

interface TableProps {
  title: string;
  data: any;
  changeQueryParams: (limit: number, pageNumber: number) => void,
  total: number,
  loading: boolean,
  //   columns: any;
}

const Table = ({
  title,
  data,
  changeQueryParams,
  total,
  loading,
  //   columns,
}: TableProps) => {
  const [queryParams, setQueryParams] = useState<any>();
  const [searchText, setSearchText] = useState<string>('');

  /*
    -------------------- PAGINATION --------------------
  */
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleOnchangePage = (newPage: number) => {
    setPage(newPage);
    changeQueryParams({ limit: rowsPerPage, pageNumber: newPage })
  };

  const handleOnchangeRowsPerPage = (numberOfRows: number) => {
    setRowsPerPage(numberOfRows);
    changeQueryParams({ limit: numberOfRows, pageNumber: page })
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
    serverSide: true,
    count: total,
    page,
    rowsPerPage,
    onChangePage: handleOnchangePage,
    onChangeRowsPerPage: handleOnchangeRowsPerPage,
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
  }), [loading, searchText, page, rowsPerPage, total]);

  /*
    -------------------- CUSTOM TITLE --------------------
  */
  const customTitle = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
        {title}
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

export default Table;