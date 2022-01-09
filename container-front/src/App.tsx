import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Landing } from './components/Landing';
//@ts-ignore
const Auth = React.lazy(() => import('auth/Auth'));

export const App = () => (
  <React.Fragment>
    <Header />
    <Landing />
    <Footer />
  </React.Fragment>
);
