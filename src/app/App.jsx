import Layout from '../components/Layout'
import Header from '../components/Header'
import Home from '../page/Home'

const App = () => {
  return (
    <Layout>
        <div className="app">
          <Home/>
        </div>
    </Layout>
  )
}

export default App
