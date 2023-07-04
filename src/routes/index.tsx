import { Routes, Route } from 'react-router-dom'
import { Home } from '../screens/Home'
import { Privacy } from '../screens/Privacy'

export const WebSiteRoutes = () => {
  return (
    <Routes>
      <Route path="/pt-br" element={<Home />} />
      <Route path="/pt-br/privacy" element={<Privacy />} />
    </Routes>
  )
}
