import React from 'react';
import { Container, SideLeft, Legend, SideRight, LegendContainer } from './styles';
import { Pie, Cell, ResponsiveContainer, PieChart } from 'recharts'; /* PieChart há  um conflito entre o nome da biblioteca e a const que eu criei */

interface PieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartBox: React.FC<PieChartProps> = ({data}) => (
    <Container>
      <SideLeft>
        <h2>Relação</h2>
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
        
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={data} dataKey="percent">  
                {
                  data.map((indicator) => (
                    <Cell key={indicator.name} fill={indicator.color}/>
                  ))   
                }              
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        
      </SideRight>
    </Container>
  );

export default PieChartBox;

