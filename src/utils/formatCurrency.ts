export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
    compactDisplay: 'long',
    currencyDisplay: 'narrowSymbol'
  }).format(value)
}
