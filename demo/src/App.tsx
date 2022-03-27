import React, { FC, useState } from 'react';
import './App.css';
import { PageName } from './constants/PageName';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';

const App: FC = () => {
  const [currentPage, setPage] = useState(PageName.First);

  switch (currentPage) {
    case PageName.First:
      return <PageOne setPage={setPage} />;
    case PageName.Second:
      return <PageTwo setPage={setPage} />;
    case PageName.Third:
      return <PageThree setPage={setPage} />;
  }
};

export default App;
