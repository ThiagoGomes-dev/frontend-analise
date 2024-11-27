import React, { useState, useEffect } from 'react';
import { getPermissions } from '../../services/api';

const PermissionList = () => {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const data = await getPermissions();
        setPermissions(data);
      } catch (error) {
        console.error('Erro ao carregar permissões', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPermissions();
  }, []);

  if (loading) {
    return <p>Carregando permissões...</p>;
  }

  return (
    <div>
      <h2>Lista de Permissões</h2>
      <ul>
        {permissions.map((permission) => (
          <li key={permission.id}>{permission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionList;
