import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Landing_Page from './pages/Landing_Page'
import Our_Services from './pages/Our_Services'
import About_Us from './pages/About_Us'
import Avail_Now from './pages/Avail_Now'
import Our_Photos from './pages/Our_Photos'
import Gallery from './pages/Gallery'
import Gallery2 from './pages/Gallery2'
import Contact_Us from './pages/Contact_Us'

function App() {
 
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Layout />} >
          <Route index element={<Landing_Page />} />
          <Route path='/Video_Gallery' element={<Gallery />} />
          <Route path='/Photos_Gallery' element={<Gallery2 />} />       
          <Route path='/Our_Photos' element={<Our_Photos />} />
          <Route path='/Our_Services' element={<Our_Services />} />
          <Route path='/About_Us' element={<About_Us />} />
          <Route path='/Contact_Us' element={<Contact_Us />} />
            
          <Route path='/Avail_Now' element={<Avail_Now />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
