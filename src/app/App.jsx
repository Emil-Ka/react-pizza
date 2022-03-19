import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Home from '../page/Home'
import Cart from '../page/Cart'

const App = () => {
  return (
    <Router>
      <Layout>
          <div className="app">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </div>
      </Layout>
    </Router>
  )
}

export default App
