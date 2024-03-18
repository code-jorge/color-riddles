import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import GameStateContext from './context/GameState'
import LanguageContext from './context/Language'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageContext>
        <GameStateContext>
          <App />
        </GameStateContext>
      </LanguageContext>
    </BrowserRouter>
  </React.StrictMode>
)