import React from 'react';
import { ReactDOM } from 'react-dom';
import PageTitle from './components/PageTitle';
import './styles/GlobalStyles.css';
import styles from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

//font font-weight
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';



function App() {
  return (
    <div className="container">
      <PageTitle>TODO LIST</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader></AppHeader>
        <AppContent></AppContent>
      </div>
    </div>
  );
}

export default App;
