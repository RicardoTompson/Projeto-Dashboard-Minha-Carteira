// import { Header } from './../HistoryBox/styles';
import styled, {keyframes} from 'styled-components';

// EFEITO DE ENTRADA NA PÁGINA DASHBOARD
const animate = keyframes`
    0% {
        transform: translateX(-100px);
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
    height: 260px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0; /* ajustado dia 21/10/25 */
    border-radius: 7px;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: ${animate} .5s; /* CHAMANDO A ANIMAÇÃO */

    > header img {
        width: 35px;
        margin-left: 5px;
    }
    > header p {
        font-size: 18px;
    }
    @media(max-width: 770px){
        width: 100%;
        font-size:24px;

        img {
            height: 20px;
            width: 20px;
        }

        > header p > footer span {
            font-size: 14px; 
        }
    }
    @media(max-width: 420px){
        width: 100%;
        height: auto;

        > header p {
            margin-bottom: 15px;
        }

    }
`;
