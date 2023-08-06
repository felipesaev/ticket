import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignUp } from '@/views/SignUp'
import { SignIn } from '@/views/SingIn'
import { Header } from '@/components/Header'
import { Home } from './views/Home'
import { Tickets } from './views/Tickets'
import { CreateTickets } from './views/CreateTickets'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/login" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/new-tickets" element={<CreateTickets />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
