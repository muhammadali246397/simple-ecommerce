import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './components/authProvider/AuthProvider.jsx'
import Main from './components/layout/main/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
       <Main></Main>
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
