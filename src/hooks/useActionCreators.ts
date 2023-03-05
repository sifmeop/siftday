import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit'

import { useMemo } from 'react'
import { useAppDispatch } from './useRedux'

export const useActionCreators = (actions: ActionCreatorsMapObject) => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(actions, dispatch), [])
}
