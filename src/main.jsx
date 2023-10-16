import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ModalProvider } from './context/modal.context.jsx'
import { TaskProvider } from './context/task.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TaskProvider>
  </React.StrictMode>,
)
