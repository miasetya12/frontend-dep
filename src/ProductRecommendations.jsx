import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductRecommendations = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const targetProductId = 10; // Ganti dengan ID produk yang diinginkan
    const skinType = ''; // Isi jika ada
    const skinTone = ''; // Isi jika ada
    const underTone = ''; 
    const topN = 5; // Jumlah produk yang ingin ditampilkan

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://flask-backend-ta-e62ef4a96bf0.herokuapp.com/recommend/cbf/tfidf', {
                    params: {
                        product_id: targetProductId,
                        skin_type: skinType,
                        skin_tone: skinTone,
                        under_tone: underTone,
                        top_n: topN,
                    },
                });
                // Update to match the response structure
                setProducts(response.data.top_similar_products); 
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Product Recommendations</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.product_id}>
                        Product: {product.product_name} | Product ID: {product.product_id} | Score: {product.score.toFixed(4)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductRecommendations;
