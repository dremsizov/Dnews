
import FooterComponent from './components/Footer/Footer';
import HeaderComponent from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


import {Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import AllNews from './components/MainCategory/AllNews/AllNews';
import Bulgaria from './components/MainCategory/Bulgaria/Bulgaria';
import World from './components/MainCategory/World/world';
import Politics from './components/MainCategory/Politics/Politics';
import Economics from './components/MainCategory/Economics/Economics';
import Sport from './components/MainCategory/Sports/Sport';
import Lifestyle from './components/MainCategory/Lifestyle/Lifestyle';
import Analitics from './components/MainCategory/Analitic/Analitics';
import Register from './components/Register/Register';
import { useState } from 'react';
import AuthContext from './contexts/authContext';



function App() {
 
  const[auth, setAuth] = useState({});


  const loginSubmitHandler = (values) => {

    console.log(values);
  }

  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
    <>
    <div>
    <HeaderComponent />

<Routes>

  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/registerR' element={<Register />} />
  <Route path='/news' element={<AllNews />} /> 
  <Route path='/bg' element={<Bulgaria />} />
  <Route path='/world' element={<World />} />
  <Route path='/politics' element={<Politics />} />

  <Route path='/economic' element={<Economics />} />
  <Route path='/sport' element={<Sport />} />
  <Route path='/lifestyle' element={<Lifestyle />} />
  <Route path='/analitics' element={<Analitics />} />

  <Route path='*' element={<NotFound />} />

</Routes>



    <FooterComponent />
    </div>
      

    </>
   </AuthContext.Provider>
  )
}

export default App
