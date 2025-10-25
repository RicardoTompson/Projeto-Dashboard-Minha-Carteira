import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Content, Filters } from './styles';
import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);

  const availableYears = useMemo(() => {
    const years = listData.map(item => new Date(item.date).getFullYear());
    const uniqueYears = Array.from(new Set(years));
    return uniqueYears.sort((a, b) => a - b);
  }, [listData]);

  const [monthSelected, setMonthSelected] = useState<string>('todos');
  const [yearSelected, setYearSelected] = useState<string>('todos');
  const [frequencyFilter, setFrequencyFilter] = useState<string[]>(['recorrente', 'eventual']);
  const [data, setData] = useState<IData[]>([]);

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
  }, [type]);

  const Mês = [
    { value: 'todos', label: 'Todos os meses' },
    { value: '1', label: 'Janeiro' },
    { value: '2', label: 'Fevereiro' },
    { value: '3', label: 'Março' },
    { value: '4', label: 'Abril' },
    { value: '5', label: 'Maio' },
    { value: '6', label: 'Junho' },
    { value: '7', label: 'Julho' },
    { value: '8', label: 'Agosto' },
    { value: '9', label: 'Setembro' },
    { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' },
    { value: '12', label: 'Dezembro' },
  ];

  const Ano = [
    { value: 'todos', label: 'Todos os anos' },
    ...availableYears.map(year => ({
      value: String(year),
      label: year,
    })),
  ];

  const toggleFrequency = (freq: string) => {
    setFrequencyFilter(prev =>
      prev.includes(freq)
        ? prev.filter(f => f !== freq)
        : [...prev, freq]
    );
  };

  useEffect(() => {
    const filteredData = listData.filter(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const matchesMonth =
        monthSelected === 'todos' || month === Number(monthSelected);
      const matchesYear =
        yearSelected === 'todos' || year === Number(yearSelected);
      const matchesFrequency =
        frequencyFilter.length === 0
          ? false
          : frequencyFilter.includes(item.frequency.toLowerCase());

      return matchesMonth && matchesYear && matchesFrequency;
    });

    const response = filteredData.map(item => ({
      id: crypto.randomUUID(),
      description: item.description,
      amountFormatted: formatCurrency(Number(item.amount)),
      frequency: item.frequency,
      dataFormatted: formatDate(item.date),
      tagColor: item.frequency.toLowerCase() === 'recorrente' ? '#4E41F0' : '#E44C4E',
    }));

    setData(response);
  }, [listData, monthSelected, yearSelected, frequencyFilter]);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput
          options={Mês}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={Ano}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${frequencyFilter.includes('recorrente') ? 'active' : ''}`}
          onClick={() => toggleFrequency('recorrente')}
        >
          Recorrentes
        </button>

        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${frequencyFilter.includes('eventual') ? 'active' : ''}`}
          onClick={() => toggleFrequency('eventual')}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.length === 0 ? (
          <p>
            Nenhum resultado encontrado para os filtros selecionados.
          </p>
        ) : (
          data.map(item => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dataFormatted}
              amount={item.amountFormatted}
            />
          ))
        )}
      </Content>
    </Container>
  );
};

export default List;
