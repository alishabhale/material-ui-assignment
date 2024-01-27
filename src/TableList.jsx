import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Chip } from '@mui/material';

const columns = [
  { id: 'status', label: 'Status', minWidth: 65 },
  { id: 'supplierName', label: 'SupplierName', minWidth: 232 },
  {
    id: 'goods',
    label: 'Goods',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'freight',
    label: 'Freight',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'total',
    label: 'Total',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'currency',
    label: 'Currency',
    minWidth: 60,
    align: 'right',
  },
  {
    id: 'base',
    label: 'Base (USD)',
    minWidth: 100,
    align: 'right',
  },
];

export default function StickyHeadTable({suppliers}) {
    console.log("supplied",suppliers)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: '#E8ECED'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {suppliers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((supplier) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={supplier.id}>
                {columns.map((column) => (
                  <TableCell key={supplier.id + column.id} align={column.align}>
                    {column.id === 'status' ? (
                      <Chip label={supplier[column.id]} color="success" />
                    ) : (
                      supplier[column.id]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>


        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={suppliers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}