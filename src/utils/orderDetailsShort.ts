import { FormValues } from 'types/form-values.interface'

export type Details = Pick<
  FormValues,
  'street' | 'house' | 'entrance' | 'level' | 'apartment'
>

export const orderDetailsShort = ({
  street,
  house,
  entrance,
  level,
  apartment
}: Details): string => {
  const details: any = { street, house, entrance, level, apartment }
  const result: string[] = []

  for (const key in details) {
    if (!!details[key]) {
      result.push(`${translateString(key)} ${details[key]}`)
    }
  }

  return result.join(', ')
}

function translateString(value: string) {
  switch (value) {
    case 'street':
      return 'вул.'
    case 'house':
      return 'д.'
    case 'entrance':
      return `під'їзд`
    case 'level':
      return 'поверх'
    case 'apartment':
      return 'кв.'
  }
}
