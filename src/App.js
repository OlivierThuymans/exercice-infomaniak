import './App.css';

import Header from './components/Header';
import BlocksWrapper from './components/BlocksWrapper';

import {IntlProvider } from 'react-intl';
import { fr as French } from './languages/fr';
import { en as English } from './languages/en';

import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {

const selectedLanguage = useSelector((state) => state.language);

  return (
      <div className="App">
        <BrowserRouter>
          <IntlProvider messages={selectedLanguage == 'FR' ? French : English}>
            <Header />
            <BlocksWrapper />
          </IntlProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
