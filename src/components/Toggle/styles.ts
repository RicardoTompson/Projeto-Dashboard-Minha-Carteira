// import styled from 'styled-components';
// import "@radix-ui/themes/styles.css";

// export const Container = styled.div`
// `;
// export const ToggleLabel = styled.span`
// `;

// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// export const ToggleLabel = styled.span`
//   font-size: 14px;
//   color: #333;
//   color: ${props => props.theme.colors.white}; /* AQUI O TEXTO "Modo escuro: Desativado" PASSA SER BRANCO */
// `;
// export const ToggleSelector = styled.div`

// `;


// -----------------------------------------------------------------------------------------
// TENTATIVA SEM COMPONENTE EXTRA

// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const ToggleLabel = styled.span`
//   margin: 0 8px;
//   color: ${props => props.theme.colors.white};
// `;

// interface ToggleButtonProps {
//   $checked: boolean;
// }

// export const ToggleButton = styled.button<ToggleButtonProps>`
//   width: 50px;
//   height: 25px;
//   background-color: ${props => (props.$checked ? "#4caf50" : "#ccc")};
//   border-radius: 30px;
//   border: none;
//   position: relative;
//   cursor: pointer;
//   padding: 0;

//   div {
//     position: absolute;
//     top: 2px;
//     left: ${props => (props.$checked ? "26px" : "2px")};
//     width: 21px;
//     height: 21px;
//     background-color: white;
//     border-radius: 50%;
//     transition: left 0.2s;
//   }
// `;


import styled from 'styled-components';
import Switch from 'react-switch';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 8px;
`;

export const ToggleSelector = styled(Switch).attrs({
  onColor: '#4D41C0',
  offColor: '#CCC',
})``;
