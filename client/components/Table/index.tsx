/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo, useEffect } from 'react';

// Components
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { TextField, Box, Typography, InputAdornment } from '@mui/material';

// Footer
// import CustomFooter from './CustomFooter';

interface ColumnOptions {
  customHeadLabelRender?: () => JSX.Element;
  customBodyRender?: (value: any, tableMeta?: any, updateValue?: any) => JSX.Element | string;
  sort?: boolean;
}

interface Column {
  name: string;
  label: string;
  options?: ColumnOptions;
}

interface TableProps {
  title: string;
  data: any;
  changeQueryParams: ({ limit, pageNumber, searchText, sortColumn, sortOrder }: {
    limit?: number;
    pageNumber?: number;
    searchText?: string;
    sortColumn?: string;
    sortOrder?: 'asc' | 'desc';
  }) => void,
  total: number,
  loading: boolean,
  columns: Column[];
}

const Table = ({
  title,
  data,
  changeQueryParams,
  total,
  loading,
  columns,
}: TableProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  /*
    -------------------- SEARCH --------------------
  */
  useEffect(() => {
    const timer = setTimeout(() => {
      changeQueryParams({ limit: rowsPerPage, pageNumber: page + 1, searchText, sortColumn, sortOrder });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  /*
    -------------------- PAGINATION --------------------
  */
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleOnchangePage = (newPage: number) => {
    setPage(newPage);
    changeQueryParams({ limit: rowsPerPage, pageNumber: newPage + 1, searchText, sortColumn, sortOrder })
  };

  const handleOnchangeRowsPerPage = (numberOfRows: number) => {
    setRowsPerPage(numberOfRows);
    changeQueryParams({ limit: numberOfRows, pageNumber: page + 1, searchText, sortColumn, sortOrder })
  };

  /*
    -------------------- SORT --------------------
  */
  const handleColumnSort = (changedColumn: string, direction: 'asc' | 'desc') => {
    setSortColumn(changedColumn);
    setSortOrder(direction);
    changeQueryParams({ limit: rowsPerPage, pageNumber: page + 1, searchText, sortColumn: changedColumn, sortOrder: direction });
  };

  /*
    -------------------- TABLE OPTIONS --------------------
  */
  const options: MUIDataTableOptions = useMemo(() => ({
    filter: false,
    sort: true,
    search: false,
    searchText: searchText,
    searchOpen: false,
    download: false,
    print: false,
    viewColumns: false,
    serverSide: true,
    responsive: 'standard',
    count: total,
    page,
    rowsPerPage,
    elevation: 0,
    onChangePage: handleOnchangePage,
    onChangeRowsPerPage: handleOnchangeRowsPerPage,
    onColumnSortChange: handleColumnSort,
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
      <Typography variant="h6" component="div" className='!text-primary'>
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
            width: '200px',
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
          <span className="text-primary text-center">Loading...</span>
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