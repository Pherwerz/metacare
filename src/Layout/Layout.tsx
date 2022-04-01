import { FC } from 'react';
import Body from '../components/Body/Body';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import './Layout.scss';

const Layout: FC = () => {
  return (
    <div className="layout flex">
      <Nav />
      <main className="flex flex-col flex-1">
        <Header />
        <Body />
      </main>
    </div>
  );
};

export default Layout;
