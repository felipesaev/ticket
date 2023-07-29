import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignUp } from '@/views/SignUp'
import { SignIn } from '@/views/SingIn'
import { UserProvider } from '@/contexts/UserContext'
import { Header } from '@/components/Header'
import { Home } from './views/Home'
import {Tickets} from './views/Tickets'

const AppRouter = () => {
  return (
    <Router>
      <UserProvider>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Header />} >
               
          <Route path="/login" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/tickets" element={<Tickets />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default AppRouter
