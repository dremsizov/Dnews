import Modal from "react-modal";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

Modal.setAppElement("#root");

import HeaderComponent from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/AUTH/Login/Login";

import NotFound from "./components/NotFound/NotFound";
import AllNews from "./components/MainCategory/AllNews/AllNews";
import Bulgaria from "./components/MainCategory/Bulgaria/Bulgaria";
import World from "./components/MainCategory/World/world";
import Politics from "./components/MainCategory/Politics/Politics";
import Economics from "./components/MainCategory/Economics/Economics";
import Sport from "./components/MainCategory/Sports/Sport";
import Lifestyle from "./components/MainCategory/Lifestyle/Lifestyle";
import Analitics from "./components/MainCategory/Analitic/Analitics";
import Register from "./components/AUTH/Register/Register";

import CreateNews from "./components/NEWS/CREATE-NEWS/CreateNews";
import Profile from "./components/AUTH/Profile/Profile";
import NewsDetails from "./components/NEWS/News_Details/NewsDetails";

import EditNews from "./components/NEWS/Edit_News/EditNews";
import SearchNews from "./components/NEWS/Search_News/SearchNews";



function App() {
  return (
    <AuthProvider>
      <HeaderComponent />
      <main id="site-content">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/news" element={<AllNews />} />
        <Route path="/createNews" element={ <CreateNews />  } />
        {/* <Route path="/createNews" element={<AuthGuard> <CreateNews /> </AuthGuard>} /> */}
        <Route path="/bg" element={<Bulgaria />} />
        <Route path="/world" element={<World />} />
        <Route path="/politics" element={<Politics />} />
       
        
        <Route path="/search" element={<SearchNews />} />
        <Route path="/economic" element={<Economics />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/analitics" element={<Analitics />} />


        <Route path='/details/:newsID' element={<NewsDetails />} />
        <Route path='/edit/:newsID' element={<EditNews />} />


  

   {/* GUARDSSSSS */}

      {/* <Route element ={<AuthGuard />}>
          <Route path="/createNews" element={ <CreateNews /> } />
      </Route> */}

        <Route path="*" element={<NotFound />} />


      </Routes>
      </main>

      <FooterComponent />
    </AuthProvider>
  );
}

export default App;
