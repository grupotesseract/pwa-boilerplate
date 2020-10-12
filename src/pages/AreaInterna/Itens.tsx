import React, { useEffect }  from 'react';
import { Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { itensRequest } from '../../store/modules/itens/actions';
import { StoreState } from '../../store/createStore';
import { SyncOutlined } from '@ant-design/icons';
import './Itens.scss';

const { Content } = Layout;

const Itens = () => {
  const filtro = '';
  const dispatch = useDispatch();
  const { itens, loadingItens, error } = useSelector(
    (state: StoreState) => state.itens
  );

  const itensFiltrados = itens.filter((item) => {
    const tituloItem = item.titulo.toLowerCase();
    const filtroItem = filtro.toLowerCase();
    return tituloItem.indexOf(filtroItem) >= 0;
  });


  useEffect(() => {
    dispatch(itensRequest());
  }, []);

  if (loadingItens) {
    return <SyncOutlined spin />
  }
  if (error) {
    return <span>Não foi possível carregar os itens</span>
  }
  return (
    <Content>
      <h2>Itens</h2>
      {itensFiltrados
        .map((item) => {
          return (
            <div
              className='item-foto'
              key={item.id}
              style={{ backgroundImage: `url('${item.urlFoto}')` }}
            >
              <span>{item.titulo}</span>
            </div>
          );
        })}
    </Content>
  );
}

export default Itens;
