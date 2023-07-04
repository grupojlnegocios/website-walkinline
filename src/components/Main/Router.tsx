import { Route, Routes } from 'react-router-dom'

import { Privacy } from './Privacy'

export const Router = () => {
  return (
    <Routes>
      <Route path="/Privacy" element={<Privacy />} />
    </Routes>
  )
}
