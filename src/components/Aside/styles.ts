import styled, {css} from 'styled-components';



interface IContainerProps {
    menuIsOpen: boolean;
}

interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

    @media(max-width: 600px){
        padding-left: 20px;
        position: fixed;
        z-index: 2;

        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css` 
            border: none;
            border-bottom: 1px solid ${props =>  props.theme.colors.gray}
        `};
    }
`;

export const Header = styled.header `
    height: 70px;
    display:flex;
    align-items: center;
    
`;

export const LogImg = styled.img `
    height: 40px;
    width: 40px;

    @media(max-width: 600px){
        /* height: 25px;
        width: 25px; */
        display: none;
    }
`;

export const Title = styled.h3 `
    display:flex;
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
    align-items: center;

    @media(max-width: 600px){
        /* width: 100px;
        font-size: 14px;
        margin-left: 5px; */

        display: none;
    }
`;

export const MenuContainer = styled.nav `
    display:flex;
    flex-direction: column;
    margin-top: 50px;

`;

export const MenuItemLink = styled.a `
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    display:flex; /* Alinhamento do ícone Dashboard com o texto Dashboard */
    margin: 10px 0;
    align-items: center;
    transition: opacity 1s;
    

    &:hover {
        opacity: 0.5;
    }
    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.white};

    border: none;
    background: none;   

    text-decoration: none;
    display:flex; /* Alinhamento do ícone Dashboard com o texto Dashboard */
    margin: 10px 0;
    align-items: center;
    transition: opacity 1s;
    

    &:hover {
        opacity: 0.5;
    }
    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const Toggle = styled.div`
    @media(max-width: 600px){
        height: 25px;
        width: 25px;
    }
    
`;

export const ToggleMenu = styled.button`
    height: 40px;
    width: 40px;

    border-radius: 5px;
    font-size: 22px;;
    background-color: ${props => props.color='#E44C4E'};
    color: ${props => props.color='#fff'};

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }
    display: none;


    @media(max-width: 700px){
    display: flex;
    justify-content: center;
    align-items: center;
    }
`;
export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;


    @media(max-width: 470px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }

`;