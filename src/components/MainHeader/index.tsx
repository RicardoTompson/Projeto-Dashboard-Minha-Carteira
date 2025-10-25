// import listaDeEmojis from '../../utils/emojis';
// import React, { useMemo, useState } from 'react';
// import { Container, Profile, Welcome, UserName } from './styles';

// import Toggle from '../Toggle';
// import {useTheme} from '../../hooks/theme';

// const MainHeader: React.FC = () => {

//   const {toggleTheme, theme} = useTheme();

//   const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

//   const handleChangeTheme = () => {
//     setDarkTheme(!darkTheme);
//     toggleTheme();
//   }

//   const emojiAleatorio = useMemo(() => {
//     const indice = Math.floor(Math.random() * listaDeEmojis.length);
//     return listaDeEmojis[indice];
//   }, []);

//   return (
//     <Container>
//       <Toggle
//         labelLeft='Light'
//         labelRight='Dark'
//         checked={darkTheme}
//         onChange={handleChangeTheme}
//       />
//       <Profile>
//         <Welcome>Olá, {emojiAleatorio}</Welcome>
//         <UserName>Ricardo Tompson</UserName>
//       </Profile>
//     </Container>
//   );
// };

// export default MainHeader;

import React, { useMemo, useState } from 'react';
import listaDeEmojis from '../../utils/emojis';
import { Container, Profile, Welcome, UserName } from './styles';

import Toggle from '../Toggle';
import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark');

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  const emojiAleatorio = useMemo(() => {
    const indice = Math.floor(Math.random() * listaDeEmojis.length);
    return listaDeEmojis[indice];
  }, []);

  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />
      <Profile>
        <Welcome>Olá, {emojiAleatorio}</Welcome>
        <UserName>Ricardo Tompson</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
