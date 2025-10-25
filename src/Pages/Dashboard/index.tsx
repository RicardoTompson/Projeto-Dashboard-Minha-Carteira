import React, { useMemo, useState, useCallback } from 'react';
import  {Container, Content} from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import confusedImg from '../../assets/confused.svg';
import pensandoImg from '../../assets/pensando.svg';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listOfMonths from '../../utils/months';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string>('todos');
  const [yearSelected, setYearSelected] = useState<string>('todos');
  const [type] = useState<'entry-balance' | 'exit-balance'>('entry-balance');

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);

  const availableYears = useMemo(() => {
    const years = listData.map(item => new Date(item.date).getFullYear());
    const uniqueYears = Array.from(new Set(years));
    return uniqueYears.sort((a, b) => a - b);
  }, [listData]);

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

// CALCULA OS VALORES DINAMICAMENTE INICIO

// CÁLCULO DAS SAÍDAS
  const totalExpenses = useMemo(() => {
  let total: number = 0;

  expenses.forEach(item => {
    const date = new Date(item.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const selectedMonth = monthSelected !== 'todos' ? Number(monthSelected) : null;
    const selectedYear = yearSelected !== 'todos' ? Number(yearSelected) : null;

    const matchesMonth = selectedMonth === null || month === selectedMonth;
    const matchesYear = selectedYear === null || year === selectedYear;

    if (matchesMonth && matchesYear) {
      try {
        total += Number(item.amount);
      } catch {
        throw new Error('Invalid amount! Amount must be number.');
      }
    }
  });

  return total;
  }, [monthSelected, yearSelected]);

// CÁLCULO DAS ENTRADAS
  const totalGains = useMemo(() => {
  let total: number = 0;

  gains.forEach(item => {
    const date = new Date(item.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const selectedMonth = monthSelected !== 'todos' ? Number(monthSelected) : null;
    const selectedYear = yearSelected !== 'todos' ? Number(yearSelected) : null;

    const matchesMonth = selectedMonth === null || month === selectedMonth;
    const matchesYear = selectedYear === null || year === selectedYear;

    if (matchesMonth && matchesYear) {
      try {
        total += Number(item.amount);
      } catch {
        throw new Error('Invalid amount! Amount must be number.');
      }
    }
  });

  return total;
  }, [monthSelected, yearSelected]);

// CÁLCULO DO SALDO 
  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title:"Que triste!",
        description:"Neste mês, você gastou mais do que deveria.",
        footerText:"Verifique seus gastos e tente cortar algumas coisas desnecessária.",
        icon: sadImg
      }
    }
    else if(totalGains === 0 && totalExpenses === 0) {
        return {
          title: "Ops!",
          description: "Neste mês, não há registro de entradas e saídas",
          footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
          icon: pensandoImg
        }
    }
    else if(totalBalance === 0) {
        return {
          title: "Ufaa!",
          description: "Neste mês, você gastou exatamente o que ganhou",
          footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro.",
          icon: confusedImg
        }
    }
    else {
        return {
          title: "Muito bem!",
          description: "Sua carteira está positiva!",
          footerText: "Continue assim. Considere investir o seu saldo",
          icon: happyImg
        }
    }
  },[totalBalance, totalGains, totalExpenses]);

// CÁLCULO DOS GRAFICOS

  const relationExpensesVsGains = useMemo (()=> {
    const total = totalGains + totalExpenses;

    const PercentGains = Number(((totalGains / total) * 100).toFixed(1));
    const PercentExpense = Number(((totalExpenses / total) * 100).toFixed(1));

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: PercentGains ? PercentGains : 0,
        color: '#E44c4E'
      },
            {
        name: "Saídas",
        value: totalExpenses,
        percent: PercentExpense ? PercentExpense : 0,
        color: '#F7931B'
      }
    ]
    
    return data;

  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return listOfMonths
      .map((_, month) => {
        let amountEntry = 0;
        gains.forEach(gain => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();

          if (
            gainMonth === month &&
            (yearSelected === 'todos' || gainYear === Number(yearSelected))
          ) {
            try {
              amountEntry += Number(gain.amount);
            } catch {
              throw new Error('AmountEntry is invalid. AmountEntry must be a valid number.');
            }
          }
        });

        let amountOutPut = 0;
        expenses.forEach(expense => {
          const date = new Date(expense.date);
          const expenseMonth = date.getMonth();
          const expenseYear = date.getFullYear();

          if (
            expenseMonth === month &&
            (yearSelected === 'todos' || expenseYear === Number(yearSelected))
          ) {
            try {
              amountOutPut += Number(expense.amount);
            } catch {
              throw new Error('AmountOutPut is invalid. AmountOutPut must be a valid number.');
            }
          }
        });

        return {
          monthNumber: month + 1, // Janeiro = 1
          month: listOfMonths[month].slice(0, 3),
          amountEntry,
          amountOutPut,
        };
      })
      .filter(item => {
        const currentMonth = new Date().getMonth() + 1; // mês atual (1 a 12)
        const currentYear = new Date().getFullYear();

        const selectedYear =
          yearSelected !== 'todos' ? Number(yearSelected) : currentYear;
        const selectedMonth =
          monthSelected !== 'todos' ? Number(monthSelected) : 12;

        // 🔹 Se for o ano atual → mostra até o mês selecionado ou o mês atual, o que for menor
        if (selectedYear === currentYear) {
          const maxMonth = Math.min(selectedMonth, currentMonth);
          return item.monthNumber <= maxMonth;
        }

        // 🔹 Se for um ano anterior → mostra todos os meses
        if (selectedYear < currentYear) {
          return true;
        }

        // 🔹 Se for um ano futuro → nada a mostrar
        return false;
      });
  }, [yearSelected, monthSelected]);

  const realtionExpensesRecurrentVsEventual = useMemo(() => {
  let amountRecurrent = 0;
  let amountEventual = 0;

  expenses
    .filter((expense) => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      return month === Number(monthSelected) && year === Number(yearSelected);
    })
    .forEach((expense) => {
      if (expense.frequency === 'recorrente') {
        amountRecurrent += Number(expense.amount);
      } else if (expense.frequency === 'eventual') {
        amountEventual += Number(expense.amount);
      }
    });

  const total = amountRecurrent + amountEventual;
  const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1))
  const percentEventual= Number(((amountEventual / total) * 100).toFixed(1))


  return [
    {
      name: 'Recorrentes',
      amount: amountRecurrent,
      percent: percentRecurrent ? percentRecurrent : 0,
      color: '#F7931B',
    },
    {
      name: 'Eventuais',
      amount: amountEventual,
      percent: percentEventual ? percentEventual : 0,
      color: '#E44C4E',
    },
  ];
}, [monthSelected, yearSelected]);

  const realtionGainsRecurrentVsEventual = useMemo(() => {
  let amountRecurrent = 0;
  let amountEventual = 0;

  gains
    .filter((gain) => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      return month === Number(monthSelected) && year === Number(yearSelected);
    })
    .forEach((gain) => {
      if (gain.frequency === 'recorrente') {
        amountRecurrent += Number(gain.amount);
      } else if (gain.frequency === 'eventual') {
        amountEventual += Number(gain.amount);
      }
    });

  const total = amountRecurrent + amountEventual;

  const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1))
  const percentEventual = Number(((amountEventual / total) * 100).toFixed(1))

  return [
    {
      name: 'Recorrentes',
      amount: amountRecurrent,
      percent: percentRecurrent ? percentRecurrent : 0,
      color: '#F7931B',
    },
    {
      name: 'Eventuais',
      amount: amountEventual,
      percent: percentEventual ? percentEventual : 0,
      color: '#E44C4E',
    },
  ];
}, [monthSelected, yearSelected]);


// CALCULA OS VALORES DINAMICAMENTE FIM

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff">
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
      <Content>
          <WalletBox
              title='Saldo'
              footerlabel='Atualizado com base nas entradas e saídas'
              amount={totalBalance}
              icon="dolar"
              color='#4E41F0'
            />
          <WalletBox
              title='Entradas'
              footerlabel='Atualizado com base nas entradas e saídas'
              amount={totalGains}
              icon="arrowUp"
              color='#F7931B'
            />
          <WalletBox
              title='Saídas'
              footerlabel='Atualizado com base nas entradas e saídas'
              amount={totalExpenses}
              icon="arrowDown"
              color='#E44c4E'
            />
            <MessageBox
              title={message.title}
              description={message.description}
              footerText={message.footerText}
              icon={message.icon}
            />

            <PieChartBox data={relationExpensesVsGains}/>

            <HistoryBox data={historyData} LineColorAmountEntry='#F7931B' LineColorAmountOutPut='#E44c4E'/>

            <BarChartBox data={realtionExpensesRecurrentVsEventual} title='Saídas'/>
            <BarChartBox data={realtionGainsRecurrentVsEventual} title='Entradas'/>

      </Content>
    </Container>
  );
};

export default Dashboard;
