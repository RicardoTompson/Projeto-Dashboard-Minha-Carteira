import React, {useState} from 'react';
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from 'react-icons/md';

import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  Title,
  MenuItemButton,
  ToggleMenu,
  ThemeToggleFooter,
} from './styles';

import Toggle from '../Toggle';

import LogoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();


  const [togglemenuIsOpend, setTogglemenuIsOpend] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)
  
  const handleToggleMenu = () =>{
    setTogglemenuIsOpend(!togglemenuIsOpend)
  }
  const handleChangeTheme = () =>{
    setDarkTheme(!darkTheme);
    toggleTheme()
  }
  


  return (
    <Container menuIsOpen={togglemenuIsOpend}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {togglemenuIsOpend ? <MdClose/> : <MdMenu/> }
        </ToggleMenu>

        <LogImg src={LogoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard  />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entrada
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward  />
          Saída
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp  />
          Sair
        </MenuItemButton>
      </MenuContainer>

      <ThemeToggleFooter menuIsOpen={togglemenuIsOpend}>
          <Toggle
            labelLeft="Light"
            labelRight="Dark"
            checked={darkTheme}
            onChange={handleChangeTheme}
         />
      </ThemeToggleFooter>
    </Container>
  );
};

export default Aside;
