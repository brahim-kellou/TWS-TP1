import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/index.jsx';
import Content from './components/Content/index.jsx';

const Index = () => (
    <div>
      <Header />
      <Content />
    </div>
  );

ReactDOM.render(<Index />, document.getElementById('root'));
