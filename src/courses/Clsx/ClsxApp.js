import React from 'react';
import Button from './Button';

ClsxApp.propTypes = {
  
};

function ClsxApp(props) {
  return (
    <div>
      <Button primary/>
      <Button primary disable/>
    </div>
  );
}

export default ClsxApp;