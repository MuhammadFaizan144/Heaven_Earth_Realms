import React from 'react'
import {BrowserRouter,Route,Router} from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Ranks from './pages/Store/Ranks'
import Crates from './pages/Store/Crates'
import Items from './pages/Items'
import Classes from './pages/Classes'
const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        {/* Store */}
        <Route path='/ranks' element={<Ranks/>}/>
        <Route path='/crates' element={<Crates/>}/>


        <Route path='/items' element={<Items/>}/>
        <Route path='/classes' element={<Classes/>}/>
      </Router>
    </BrowserRouter>
  )
}

export default App
