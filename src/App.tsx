import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login'
import { RecoveryPass } from './pages/RecoveryPass'

import './styles/global.css'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/recovery-pass' element={<RecoveryPass/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
