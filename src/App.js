import React from 'react';  
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

import './styles/GlobalStyles.css';
import styles from './styles/modules/app.module.scss';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader></AppHeader>
          <AppContent></AppContent>
        </div>
      </div>
      <Toaster toastOptions={{
        position: "bottom-right",
        style: {
          fontSize: '1.4rem',
        }
      }}></Toaster>
    </>
  );
}

export default App;
