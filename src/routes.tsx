import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignUp } from '@/views/SignUp'
import { SignIn } from '@/views/SingIn'
import { UserProvider } from '@/contexts/UserContext'
import { Header } from '@/components/Header'

const AppRouter = () => {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default AppRouter
