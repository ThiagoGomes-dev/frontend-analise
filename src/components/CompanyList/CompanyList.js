import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import './CompanyList.css';

const rows = [
  { id: 1, cnpj: '12.345.678/0001-90', razaoSocial: 'Empresa A', email: 'empresaA@exemplo.com' },
  { id: 2, cnpj: '98.765.432/0001-01', razaoSocial: 'Empresa B', email: 'empresaB@exemplo.com' },
  { id: 3, cnpj: '45.678.123/0001-87', razaoSocial: 'Empresa C', email: 'empresaC@exemplo.com' },
  { id: 4, cnpj: '23.456.789/0001-02', razaoSocial: 'Empresa D', email: 'empresaD@exemplo.com' },
];

const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'cnpj', label: 'CNPJ' },
  { id: 'razaoSocial', label: 'Razão Social' },
  { id: 'email', label: 'E-mail' },
  { id: 'actions', label: 'Ações' },
];

function CompanyList() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [currentCompany, setCurrentCompany] = useState({ id: '', cnpj: '', razaoSocial: '', email: '' });

  const handleSave = () => {
    alert(`Dados da empresa com ID ${currentCompany.id} atualizados!`);
    setOpenEditModal(false);
  };

  const handleDelete = () => {
    alert(`Excluindo empresa com ID: ${currentCompany.id}`);
    setOpenDeleteModal(false);
  };

  const handleMenuClick = (company, action) => {
    setCurrentCompany(company);
    if (action === 'edit') {
      setOpenEditModal(true);
    } else if (action === 'delete') {
      setOpenDeleteModal(true);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Gerenciar Empresas</h2>
      <div className="d-flex justify-content-between mb-4">
        <input type="text" placeholder="Procurar Empresas" className="search-input" />
        <Button className="btn-cadastrar">Adicionar Empresa</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            {headCells.map((headCell) => (
              <th key={headCell.id}>{headCell.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.cnpj}</td>
              <td>{row.razaoSocial}</td>
              <td>{row.email}</td>
              <td>
                {/* Botões de Editar e Excluir */}
                <div className="action-icons">
                  <Button variant="link" onClick={() => handleMenuClick(row, 'edit')}>
                    <FaEdit />
                  </Button>
                  <Button variant="link" onClick={() => handleMenuClick(row, 'delete')}>
                    <FaTrashAlt />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de edição */}
      <Modal show={openEditModal} onHide={() => setOpenEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Empresa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCNPJ">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                type="text"
                placeholder="CNPJ"
                value={currentCompany.cnpj}
                onChange={(e) => setCurrentCompany({ ...currentCompany, cnpj: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formRazaoSocial">
              <Form.Label>Razão Social</Form.Label>
              <Form.Control
                type="text"
                placeholder="Razão Social"
                value={currentCompany.razaoSocial}
                onChange={(e) => setCurrentCompany({ ...currentCompany, razaoSocial: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="E-mail"
                value={currentCompany.email}
                onChange={(e) => setCurrentCompany({ ...currentCompany, email: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="tela-editar">
          <Button className="cancelar-btn" onClick={() => setOpenEditModal(false)}>
            Cancelar
          </Button>
          <Button className="confirmar-btn" onClick={handleSave}>
            Salvar alterações
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal show={openDeleteModal} onHide={() => setOpenDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tem certeza que deseja excluir a empresa {currentCompany.razaoSocial}?</p>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button className="cancelar-btn" onClick={() => setOpenDeleteModal(false)}>
            Cancelar
          </Button>
          <Button className="confirmar-btn" onClick={handleDelete}>
            Confirmar Exclusão
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CompanyList;
