import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import Home from './Pages/home/Home'
import Contact from './Pages/contact/Contact'
import Reservations from './Pages/reservations/Reservations'
import Menu from './Pages/menu/Menu'




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='reservations' element={<Reservations />} />
          <Route path='menu' element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
