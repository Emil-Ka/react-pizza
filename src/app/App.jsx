import './app.scss'

import Layout from '../components/layout/Layout'
import Header from '../components/header/Header'
import Home from '../page/home/Home'

const App = () => {
   return (
      <Layout>
         <div className="app">
            <Header/>
            <Home/>
         </div>
      </Layout>
   )
}

export default App
