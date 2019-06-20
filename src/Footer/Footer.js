import React from 'react';
import styled from 'styled-components';

const Copyright = styled.div`
  text-align: center;
  font-family: Rajdhani;
  color: white;
`
function Footer() {
  return (
      <footer className="App-footer">
        <Copyright>
            Copyright © 2019 WebIoTSolutions
        </Copyright>
      </footer>
  );
}

export default Footer;
