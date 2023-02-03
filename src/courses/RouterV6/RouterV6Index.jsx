import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterV6App from './RouterV6App';

RouterV6Index.propTypes = {};

function RouterV6Index(props) {
  return (
    <BrowserRouter>
      <RouterV6App />
    </BrowserRouter>
  );
}

export default RouterV6Index;
