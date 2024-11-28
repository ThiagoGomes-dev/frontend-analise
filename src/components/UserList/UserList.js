import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'; // Usando ícones de lixeira e caneta
import './UserList.css';

const rows = [
  { id: 1, name: 'Thiago Sousa Gomes', email: 'thiago.gomes@maisunifacisa.com.br', status: 'Ativo' },
  { id: 2, name: 'Bruno Lima', email: 'bruno.lima@gmail.com', status: 'Inativo' },
  { id: 3, name: 'Carlos Pereira', email: 'carlos.pereira@gmail.com', status: 'Ativo' },
  { id: 4, name: 'Santos Carlos', email: 'santos.@gmail.com', status: 'Ativo' },
  // Adicione os outros usuários aqui
];

const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Nome' },
  { id: 'email', label: 'E-mail' },
  { id: 'status', label: 'Status' },
  { id: 'actions', label: 'Ações' },
];

function UserList() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: '', name: '', email: '', status: '' });

  const handleSave = () => {
    alert(`Dados de usuário com ID ${currentUser.id} atualizados!`);
    setOpenEditModal(false);
  };

  const handleDelete = () => {
    alert(`Excluindo usuário com ID: ${currentUser.id}`);
    setOpenDeleteModal(false); // Fechar o modal de exclusão após a confirmação
  };

  const handleMenuClick = (user, action) => {
    setCurrentUser(user); // Preenche os dados do usuário para edição/exclusão
    if (action === 'edit') {
      setOpenEditModal(true); // Abre o modal de edição
    } else if (action === 'delete') {
      setOpenDeleteModal(true); // Abre o modal de exclusão
    }
  };

  return (
    <div className="container mt-4">
      <h2>Gerenciar Usuários</h2>
      <div className="d-flex justify-content-between mb-4">
        <input type="text" placeholder="Procurar Usuários" className="search-input" />
        <Button className="btn-cadastrar">Adicionar Usuário</Button>
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
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.status}</td>
              <td>
                {/* Botões de Editar e Excluir */}
                <div className="action-icons">
                  <Button variant="link" onClick={() => handleMenuClick(row, 'edit')}>
                    <FaEdit /> {/* Ícone de editar */}
                  </Button>
                  <Button variant="link" onClick={() => handleMenuClick(row, 'delete')}>
                    <FaTrashAlt /> {/* Ícone de excluir */}
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
          <Modal.Title>Editar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                value={currentUser.name}
                onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={currentUser.email}
                onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={currentUser.status}
                onChange={(e) => setCurrentUser({ ...currentUser, status: e.target.value })}
              >
                <option>Ativo</option>
                <option>Inativo</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button className="cancel-btn" onClick={() => setOpenEditModal(false)}>
            Cancelar
          </Button>
          <Button className="confirm-btn" onClick={handleSave}>
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
          <p>Tem certeza que deseja excluir o usuário {currentUser.name}?</p>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button className="cancel-btn" onClick={() => setOpenDeleteModal(false)}>
            Cancelar
          </Button>
          <Button className="confirm-btn" onClick={handleDelete}>
            Confirmar Exclusão
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserList;
