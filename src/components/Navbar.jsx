import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/buy-review">Buy & Review</Link>
                </li>
                <li>
                    <Link to="/get-recommendation">Get Recommendation</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
