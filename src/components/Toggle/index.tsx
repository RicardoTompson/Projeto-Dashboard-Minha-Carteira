// import { useState } from "react";
// import Switch from "react-switch"; // IMPORT CORRETO
// import { Container, ToggleLabel } from "./styles";

// const ToggleExample: React.FC = () => {
//   const [checked, setChecked] = useState(false);

//   return (
//     <Container>
//       <ToggleLabel>Modo escuro:</ToggleLabel>
//       <Switch
//         checked={checked}
//         onChange={setChecked}
//         onColor="#4ade80"
//         offColor="#ccc"
//         checkedIcon={false}
//         uncheckedIcon={false}
//       />
//       <ToggleLabel>{checked ? "Ativado" : "Desativado"}</ToggleLabel>
//     </Container>
//   );
// };

// export default ToggleExample;

import React from 'react';

import {
  Container,
  ToggleLabel,
  ToggleSelector
} from './styles';

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
  labelLeft, labelRight, checked, onChange
}) => ( 
  <Container>
    <ToggleLabel>{labelLeft}</ToggleLabel>
    <ToggleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}   
    >
    </ToggleSelector>
    <ToggleLabel>{labelRight}</ToggleLabel>
  </Container>
)
export default Toggle;