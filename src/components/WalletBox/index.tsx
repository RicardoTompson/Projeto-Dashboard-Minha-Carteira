import React, { useMemo } from 'react';
import { Container } from './styles';
import CountUp from 'react-countup'

import dolarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerlabel: string; /* footer epxcifico dentro da caixa */
    icon: 'dolar' | 'arrowUp'| 'arrowDown';
    color: string;
}

const WalletBox: React.FC <IWalletBoxProps>= ({
    title, amount, footerlabel, icon, color
}) => {

  const iconSelected = useMemo (() => {
    switch(icon){
      case 'dolar':
        return dolarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
      default:
        return undefined;
    }
    // if (icon === 'dolar') {
    //   return dolarImg;
    // }
    // if (icon === 'arrowUp') {
    //   return arrowUpImg;
    // }
    // if (icon === 'arrowDown') {
    //   return arrowDownImg;
    // }
  },[icon]);
  
  return (
    <Container color={color}>
        <span>{title}</span>
        <h1>
          <strong>R$ </strong>
          <CountUp
            end={amount}
            // prefix={'R$ '}
            separator='.'
            decimal=','
            decimals={2}
          />
        </h1>
        <small>{footerlabel}</small>
        <img src={iconSelected} alt ={title} />
    </Container>

  )
};
export default WalletBox;
