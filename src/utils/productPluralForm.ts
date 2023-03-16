export const productPluralForm = (count: number): string => {
  if (!count) return 'товарів'
  if (count === 1) {
    return `${count} товар`
  } else if (count > 1 && count < 5) {
    return `${count} товару`
  } else {
    return `${count} товарів`
  }
}
