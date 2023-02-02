import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

Paragraph.propTypes = {};

function Paragraph(props) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p className={theme}>Thay doi theme</p>
    </div>
  );
}

export default Paragraph
