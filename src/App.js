import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './views/Home/Home'
import Level from './views/Level/Level'
import End from './views/End/End'
import './App.css'
import './navigation.css'

const App = ()=> (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path=":type/end" element={<End />} />
      <Route path=":type/:level" element={<Level />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
)

export default App