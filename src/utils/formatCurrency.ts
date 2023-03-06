export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
    compactDisplay: 'long',
    maximumSignificantDigits: 1,
    currencyDisplay: 'narrowSymbol'
  }).format(value)
}
