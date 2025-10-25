import React from 'react';
import { Container, SideRight, SideLeft, LegendContainer, Legend } from './styles';
import {ResponsiveContainer, BarChart, Bar, Cell, Tooltip} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

interface IBarChartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[],
}

const BarChartBox: React.FC<IBarChartProps> = ({
    title, data
}) => (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
        <LegendContainer>
            {
                data.map(incdicator => (
                <Legend key={incdicator.name} color={incdicator.color}>
                      <div>{incdicator.percent}%</div>
                      <span>{incdicator.name}</span>
                </Legend>
                ))
            }
        </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
                <Bar dataKey="amount" name='Valor'>
                {data.map((indicator, index) => (
                    <Cell
                    key={`cell-${indicator.name}-${index}`}
                    fill={indicator.color}
                    />
                ))}
                </Bar>
                <Tooltip
                  cursor={{fill: 'none'}}
                  formatter={(value) => formatCurrency(Number(value))}
                />
            </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
  
export default BarChartBox;
