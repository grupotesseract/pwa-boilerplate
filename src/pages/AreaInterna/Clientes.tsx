import React, { useEffect } from 'react';
import { Layout, Avatar, Typography, Spin, Badge, Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { clientesRequest } from '../../store/modules/clientes/actions';
import { StoreState } from '../../store/createStore';
import { UserOutlined } from '@ant-design/icons';
import './Clientes.scss';

const { Content } = Layout;
const { Text } = Typography;

const Clientes = () => {
  const filtro = '';
  const dispatch = useDispatch();
  const { clientes, loadingClientes, error } = useSelector(
    (state: StoreState) => state.clientes
  );

  const clientesFiltrados = clientes.filter((cliente) => {
    const nomeCliente = cliente.nome.toLowerCase();
    const filtroCliente = filtro.toLowerCase();
    return nomeCliente.indexOf(filtroCliente) >= 0;
  });

  useEffect(() => {
    dispatch(clientesRequest());
  }, []);

  if (loadingClientes) {
    return <Spin />;
  }
  if (error) {
    return <span>Não foi possível carregar os clientes</span>;
  }
  return (
    <Content>
      <h2>Clientes</h2>
      <div className='lista-clientes'>
        {clientesFiltrados.map((cliente) => {
          return (
            <div className='cliente'>
              <Badge status={Math.random() > 0.5 ? 'success' : 'error'}>
                <Avatar
                  shape='square'
                  size={50}
                  icon={<UserOutlined />}
                  src={cliente.urlFoto}
                />
              </Badge>
              <div className='detalhes'>
                <Text>{cliente.nome}</Text>
                <Text type='secondary'>{cliente.celular}</Text>
              </div>
            </div>
          );
        })}
      </div>
    </Content>
  );
};

export default Clientes;
