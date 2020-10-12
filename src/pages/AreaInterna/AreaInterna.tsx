import React, { FunctionComponent, ReactComponentElement } from 'react';
import { Tabs } from 'antd';
import MinhaConta from './MinhaConta';
import Itens from './Itens';
import { Layout } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import './AreaInterna.scss';
import Clientes from './Clientes';

const { TabPane } = Tabs;

type PropsMenuItem = {
  icone: ReactComponentElement<any>;
  texto: string;
};

const MenuItem: FunctionComponent<PropsMenuItem> = ({ icone, texto }) => {
  return (
    <div className='menu-item'>
      <span className='icone'>{icone}</span>
      <span className='texto'>{texto}</span>
    </div>
  );
};

export const AreaInterna: FunctionComponent = () => {
  return (
    <Layout className='area-interna'>
      <Tabs tabPosition='bottom'>
        <TabPane
          tab={<MenuItem texto='Início' icone={<HomeOutlined />} />}
          key='inicio'
        >
          <Itens />
        </TabPane>
        <TabPane
          tab={<MenuItem texto='Pessoas' icone={<UserOutlined />} />}
          key='pessoas'
        >
          <Clientes />
        </TabPane>
        <TabPane
          tab={<MenuItem texto='Configuração' icone={<SettingOutlined />} />}
          key='configuracao'
        >
          <MinhaConta />
        </TabPane>
      </Tabs>
    </Layout>
  );
}
