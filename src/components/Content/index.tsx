import React, { ReactNode } from 'react';
import { Container } from './styles';

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => (
  <Container>{children}</Container>
);
  
export default Content;
