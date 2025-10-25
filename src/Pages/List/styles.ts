import styled, {keyframes} from "styled-components";


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

    animation: ${animate} .5s ease-in;  /* CHAMANDO A ANIMAÇÃO */

`;

export const Content = styled.main`
    >p {
        padding: 1rem;
        text-align: center;
    }
`;

export const HistoryFinanceCard = styled.div``;


export const Filters = styled.div`

    width:100%;
    display: flex;
    justify-content:center;
    margin-bottom: 30px;
    
    

    .tag-filter {
        font-size: 18px;
        font-weight: 500;
        justify-content: none;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.primary}; /* Aqui adequa o cor ao fundo do texto "Recorrentes e Eventuais" */

        margin: 0 10px;

        /* opacity: .4; */
        transition: opacity .3s;

        &:hover {
            opacity: 0.7;
        }


    }
    .tag-filter-recurrent::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.success}; 
    }
    .tag-filter-eventual::after{
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.warning}; 
    }


`;