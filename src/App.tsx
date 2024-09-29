import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import Home from './Pages/home/Home'
import Contact from './Pages/contact/Contact'
import About from './Pages/about/About'
import Career from './Pages/career/Career'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='career' element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
