import {Provider} from 'react-redux'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Home from '../page/home/Home'
import store from '../redux/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
          <div className="app">
            <Home/>
          </div>
      </Layout>
    </Provider>
  )
}

export default App
