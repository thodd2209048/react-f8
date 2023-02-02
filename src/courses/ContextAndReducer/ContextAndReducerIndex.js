import React from 'react';
import ContextAndReducerApp from './ContextAndReducerApp';
import { StoreProvider } from './store';

ContextAndReducerIndex.propTypes = {
  
};

function ContextAndReducerIndex(props) {
  return (
    <StoreProvider>
      <ContextAndReducerApp/>
    </StoreProvider>
  );
}

export default ContextAndReducerIndex;