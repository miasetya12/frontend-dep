// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MainHome from './MainHome'; // Mengimpor MainHome
import ProductDetail from './components/ProductDetail'; // Mengimpor komponen ProductDetail
import ProductRecommendations from './ProductRecommendations'; // Jika Anda memiliki halaman rekomendasi produk

const App = () => {
    return (
        <Router>
            <Navbar />
            <SearchBar />
            <Routes>
                <Route path="/" element={<MainHome />} /> {/* Rute untuk halaman utama */}
                <Route path="/product/:product_id" element={<ProductDetail />} /> {/* Rute untuk detail produk */}
                <Route path="/buy-review" element={<h2>Buy & Review Page</h2>} /> {/* Rute untuk Buy & Review */}
                <Route path="/get-recommendation" element={<ProductRecommendations />} /> {/* Rute untuk rekomendasi */}
            </Routes>
        </Router>
    );
};

export default App;
