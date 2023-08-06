import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './routes.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from './contexts/UserContext.tsx'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="container mx-auto">
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </QueryClientProvider>
  </div>
)
