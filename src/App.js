
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer';
import MainPage from './components/MainPage';
import Login from './components/Login'
import Content from './components/Content'
import DisplayPage from './components/DisplayPage';
import Movies from './components/Movies';
import Call from './components/Call';
import SampleForm from './Page.jsx/SampleForm';

import {
  BrowserRouter,

  Route,
  Routes,
} from "react-router-dom";
import Single1 from './components/Single1';



function App() {
  return (
    <div className=" bg-black bg-opacity-75 bg-[url('https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png')] bg-blend-darken">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/displaypage' element={<DisplayPage />} />
          <Route path='/movies' element={<Call />} />
          <Route path='/sampleform' element={<SampleForm />} />

        </Routes>
        {/* <Call /> */}
        {/* <Content /> */}
        {/* <Footer /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
