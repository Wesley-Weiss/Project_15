//2 Timothy 4:7: "I have fought the good fight, I have finished the race, I have kept the faith" (NIV)
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
