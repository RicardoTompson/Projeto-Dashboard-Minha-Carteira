const formatDate = (date: string | number): string => {
    const dateFormatted = new Date(date);
    const Dia = dateFormatted.getDate() > 9 ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;
    const Mês = dateFormatted.getMonth() + 1 > 9 ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() +1 }`;

    const Ano = dateFormatted.getFullYear();
    return `${Dia}/${Mês}/${Ano}`
}
export default formatDate;