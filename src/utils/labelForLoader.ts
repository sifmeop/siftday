export const labelForLoader = (type: string): string => {
  switch (type) {
    case 'pizza':
      return 'Завантаження піци...'
    case 'sauce':
      return 'Завантаження соусів...'
    case 'drink':
      return 'Завантаження напоїв...'
    default:
      return 'Завантаження...'
  }
}
