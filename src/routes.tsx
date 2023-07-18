import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SingIn'
import { UsuarioProvider } from './User'

const AppRouter = () => {
  return (
    <Router>
      <UsuarioProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </UsuarioProvider>
    </Router>
  )
}

export default AppRouter
