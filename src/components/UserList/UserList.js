import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, IconButton, Menu, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './UserList.css'; // Importando o arquivo CSS

const rows = [
  { id: 1, name: 'Thiago Sousa Gomes', email: 'thiago.gomes@maisunifacisa.com.br', status: 'Ativo' },
  { id: 2, name: 'Bruno Lima', email: 'bruno.lima@gmail.com', status: 'Inativo' },
  { id: 3, name: 'Carlos Pereira', email: 'carlos.pereira@gmail.com', status: 'Ativo' },
  { id: 4, name: 'Santos Carlos', email: 'santos.@gmail.com', status: 'Ativo' },
  { id: 5, name: 'Daniela Oliveira', email: 'daniela.oliveira@gmail.com', status: 'Ativo' },
  { id: 6, name: 'Eduardo Martins', email: 'eduardo.martins@gmail.com', status: 'Inativo' },
  { id: 7, name: 'Fernanda Ribeiro', email: 'fernanda.ribeiro@gmail.com', status: 'Ativo' },
  { id: 8, name: 'Gustavo Silva', email: 'gustavo.silva@gmail.com', status: 'Inativo' },
  { id: 9, name: 'Heloisa Santos', email: 'heloisa.santos@gmail.com', status: 'Ativo' },
  { id: 10, name: 'Igor Ferreira', email: 'igor.ferreira@gmail.com', status: 'Ativo' },
  { id: 11, name: 'Juliana Costa', email: 'juliana.costa@gmail.com', status: 'Inativo' },
  { id: 12, name: 'Karla Mendes', email: 'karla.mendes@gmail.com', status: 'Ativo' },
  { id: 13, name: 'Lucas Almeida', email: 'lucas.almeida@gmail.com', status: 'Ativo' },
  { id: 14, name: 'Maria Fernanda', email: 'maria.fernanda@gmail.com', status: 'Inativo' },
  { id: 15, name: 'Nicolas Oliveira', email: 'nicolas.oliveira@gmail.com', status: 'Ativo' }
];

const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Nome' },
  { id: 'email', label: 'E-mail' },
  { id: 'status', label: 'Status' },
  { id: 'actions', label: 'Ações' },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={'left'} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function UserList() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentUserId, setCurrentUserId] = React.useState(null);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickMenu = (event, id) => {
    setAnchorEl(event.currentTarget);
    setCurrentUserId(id);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    alert(`Editando usuário com ID: ${currentUserId}`);
    handleCloseMenu();
  };

  const handleDelete = () => {
    alert(`Excluindo usuário com ID: ${currentUserId}`);
    handleCloseMenu();
  };

  return (
    <Box className="user-list-container">
      <h2>Gerenciar Usuários</h2>
      <div className="header">
        <input type="text" placeholder="Procurar Usuários" className="search-input" />
        <button className="btn-cadastrar">Adicionar Usuário</button>
      </div>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody>
              {rows
                .sort((a, b) => (order === 'desc' ? a[orderBy] < b[orderBy] : a[orderBy] > b[orderBy]) ? 1 : -1)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>
                        <IconButton
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={(e) => handleClickMenu(e, row.id)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl) && currentUserId === row.id}
                          onClose={handleCloseMenu}
                        >
                          <MenuItem onClick={handleEdit}>Editar</MenuItem>
                          <MenuItem onClick={handleDelete}>Excluir</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Linhas por Páginas"
        />
      </Paper>
    </Box>
  );
}
