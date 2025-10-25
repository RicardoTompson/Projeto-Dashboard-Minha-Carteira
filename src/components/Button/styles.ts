import styled from "styled-components";

export const Container =styled.button `
    width: 100%;


    margin: 7px 0;
    padding: 10px;

    border-radius: 5px;

    font-weight: bold;
    color: ${props => props.color='#fff'};
    background-color: ${props => props.color='#E44C4E'};

    transition: 0.3s;

    &:hover {
        opacity: .7;
    }
`;