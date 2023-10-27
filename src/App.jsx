
import './App.css'
import Campaigns from './components/Campaigns';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Attract from './components/Attract';
import Payments from './components/Bcard';
import Email from './shared/exam/contact';
import Top from './components/Top';
import Bcard from './components/Bcard';
import Home from './components/Top';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navigate from './Home/home';
import Sigform from './form/login';
import Page from './button/landing';







function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page></Page>}/>
          <Route path="dep" element={<Navigate/>}/>
          <Route path="sign" element={<Sigform/>}/>
          <Route path="exam" element={<Email/>}/>
          <Route path="home" element={<Page/>}/>
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
