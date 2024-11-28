// src/components/UserList/UserForm.js
import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Ativo');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email, status };
    onSubmit(newUser);
    setName('');
    setEmail('');
    setStatus('Ativo');
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      >
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
      </select>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default UserForm;
