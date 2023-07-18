import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="container mx-auto">
    <AppRouter />
  </div>
)
