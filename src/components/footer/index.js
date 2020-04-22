import React from 'react';
import styled from 'styled-components';

import { footerHeight } from '../../utils/constants';

const MainFooter = () => <Footer>&copy; 2020</Footer>;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${footerHeight};
  background: #333;
  color: #eee;
`;

export default MainFooter;
