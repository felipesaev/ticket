import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignUp } from '@/views/SignUp'
import { SignIn } from '@/views/SingIn'
import { Home } from './views/Home'
import { Tickets } from './views/Tickets'
import { CreateTickets } from './views/CreateTickets'
import Layout from './views/Layout'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/new-tickets" element={<CreateTickets />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
