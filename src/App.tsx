import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routing } from './utils/routing'

const App: FC = () => <RouterProvider router={routing} />

export default App
