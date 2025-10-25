// import styled from "styled-components";

// export const Container = styled.div`
//     height: 100vh;

//     display: flex;
//     flex: 1;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     background-color: ${props => props.color='#1b1f38'} /*o código estava apontando colors light */

// `;

// export const Logo = styled.div`
//     display: flex;
//     align-items: center;

//     margin-bottom: 30px;

//     > h2 {
//         color: ${props => props.color='#fff'};
//         margin-left: 7px;
//     }
//     > img {
//         width: 50px;
//         height: 40px;
//     }

// `;
// export const Form = styled.form`
//     width: 300px;
//     height: 300px;

//     padding: 30px;

//     border-radius: 10px;

//     background-color: ${props => props.color='#313862'}

// `;

// export const FormTitle = styled.h1`
//     margin-bottom: 40px;
//     color: ${props => props.color='#fff'};
//     &::after{
//         content: '';
//         display: block;
//         width: 55px;
//         border-bottom: 10px solid ${props => props.color='#E44C4E'}; 
            
//     }

// `;

import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    > h2 {
        color: ${({ theme }) => theme.colors.white};
        margin-left: 7px;
    }

    > img {
        width: 50px;
        height: 40px;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;

    padding: 30px;

    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.white};

    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${({ theme }) => theme.colors.warning};
    }
`;
