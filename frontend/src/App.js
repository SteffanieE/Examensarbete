import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContexProvider } from "./context/AuthContext";
import { FavoriteListProvider } from './context/FavoriteListContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleAd from './pages/SingleAd';
import CreateAd from './pages/CreateAd';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import Category from './pages/Category';
import Header from './components/Header';
import Footer from './components/Footer';
import FavoriteAds from './pages/FavoriteAds';

function App() {

  return (
    <BrowserRouter>
      <AuthContexProvider>
        <FavoriteListProvider>
          <Header />
            <main>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/skapa-konto" element={<Register />}/>
                  <Route path="/skapa-annons" element={<CreateAd />}/>
                  <Route path='/mina-sidor' element={<MyPage />}/> 
                    <Route path='/mina-sidor/sparade-annonser' element={<FavoriteAds />} />
                  <Route path="/kategori/:slug" element={<Category />} />
                  <Route path="/kategori/:slug/:id" element={<SingleAd />} />
                  <Route path="/*" element={<NotFound />} />                  
              </Routes>
            </main>
          <Footer />
       </FavoriteListProvider>
      </AuthContexProvider>
    </BrowserRouter>
  );
}

export default App;
