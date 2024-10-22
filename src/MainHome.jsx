// src/MainHome.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

const MainHome = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // const response = await fetch('http://127.0.0.1:5000/products');
                const response = await fetch('https://flask-backend-ta-e62ef4a96bf0.herokuapp.com/products');
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data); // Menyimpan data produk
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Popular Products</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.product_id} // id unik dari MongoDB
                        product_id={product.product_id} // Change this line to product_id
                        image={product.image_url} // Pastikan field ini ada
                        name={product.product_name} // Pastikan field ini ada
                        price={product.price} // Pastikan field ini ada
                    />
                ))}
            </div>
        </div>
    );
};

export default MainHome;
