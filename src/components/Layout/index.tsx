// import React from 'react';
// import { ContainerGrid } from './styles';

// import MainHeader from '../MainHeader';
// import Aside from '../Aside';
// import Content from '../Content';

// const Layout: React.FC = ({children}) => {
//     return (
//         <ContainerGrid>
//             <MainHeader/>
//             <Aside/>
//             <Content>
//                 {children}
//             </Content>
//         </ContainerGrid>
        
//     );
// }
// export default Layout;

import React, { ReactNode } from 'react';
import { ContainerGrid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ContainerGrid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </ContainerGrid>
  );
};

export default Layout;
