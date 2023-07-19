import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SingIn'
import { UsuarioProvider } from './User'
import { Header } from './components/Header'

const AppRouter = () => {
  return (
    <Router>
      <UsuarioProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </UsuarioProvider>
    </Router>
  )
}

export default AppRouter
