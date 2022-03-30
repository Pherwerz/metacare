import { FC } from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import './Layout.scss';

const Layout: FC = () => {
  return (
    <div className="layout flex">
      <Nav />
      <main className="flex-1">
        <Header />
      </main>
    </div>
  );
};

export default Layout;
