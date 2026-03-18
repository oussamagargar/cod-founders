import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Catalog from './pages/Catalog'
import Products from './pages/Products'
import Leads from './pages/Leads'
import Orders from './pages/Orders'
import Sourcing from './pages/Sourcing'
import Reports from './pages/Reports'
import Credits from './pages/Credits'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="products" element={<Products />} />
          <Route path="leads" element={<Leads />} />
          <Route path="orders" element={<Orders />} />
          <Route path="sourcing" element={<Sourcing />} />
          <Route path="reports" element={<Reports />} />
          <Route path="credits" element={<Credits />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
