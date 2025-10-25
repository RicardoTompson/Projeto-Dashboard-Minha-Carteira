import styled, {keyframes} from 'styled-components';

interface ILegendProps {
    color: string;
}

// EFEITO DE ENTRADA NA PÁGINA DASHBOARD
const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50% {
        opacity: 0.3;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 48%;
    min-height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;

    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: auto;
    }

    animation: ${animate} .5s; /* CHAMANDO A ANIMAÇÃO */

`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }
`;

export const SideRight  = styled.main`
    flex: 1;
    min-height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    
    padding-top: 35px;
`;

// REAPROVEITANDO ======
export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    

    > div {
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;

        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }
    > span {
        margin-left: 5px;
    }
`;
export const LegendContainer = styled.ul`
    list-style: none;

    height: 175px;
    padding:5px;
    /* overflow-y: scroll; */
    /* @media (max-width: 1200){
        display: flex;

        height: auto;

    } */
    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }

`;