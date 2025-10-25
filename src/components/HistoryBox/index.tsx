import React from 'react';
import { Container, LegendContainer, Legend, Header, ChartContainer } from './styles';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts'; /* PieChart há  um conflito entre o nome da biblioteca e a const que eu criei */

import formatCurrency from '../../utils/formatCurrency';

interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutPut: number;
    }[],
    LineColorAmountEntry: string;
    LineColorAmountOutPut: string;
}


const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, LineColorAmountEntry, LineColorAmountOutPut
}) => (
  <Container>
    <Header>
        <h2>Histórico de saldo</h2>
        <LegendContainer>
            <Legend color={LineColorAmountEntry}>
                <div></div>
                <span>Entradas</span>
            </Legend>
            <Legend color={LineColorAmountOutPut}>
                <div></div>
                <span>Saidas</span>
            </Legend>
        </LegendContainer>
    </Header>
    <ChartContainer>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                <XAxis dataKey="month" stroke="#cecece" />
                <Tooltip formatter={(value) => formatCurrency(Number(value))}/>
                <Line
                    type="monotone"
                    dataKey="amountEntry"
                    name="Entradas"
                    stroke={LineColorAmountEntry}
                    strokeWidth={5}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                />
                <Line
                    type="monotone"
                    dataKey="amountOutPut"
                    name="Saídas"
                    stroke={LineColorAmountOutPut}
                    strokeWidth={5}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    </ChartContainer>
    
  </Container>
);

export default HistoryBox;
