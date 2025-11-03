import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(cart);
    }, []);

    const removeFromCart = (index: number) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <nav>
                <button onClick={() => navigate('/')} className="title">
                    <h1>Heritage Home Co</h1>
                </button>
                <ul>
                    <li><button onClick={() => navigate('/about')}>About</button></li>
                    <li><button onClick={() => navigate('/products')}>Products</button></li>
                    <li><button onClick={() => navigate('/cart')}>Cart</button></li>
                    <li><button onClick={() => navigate('/settings')}>Settings</button></li>
                </ul>
            </nav>
            <div className="page-content">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="empty-cart">art is empty</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <div className="cart-item-info">
                                        <h3>{item.name}</h3>
                                        <p className="cart-item-price">${item.price.toLocaleString()}</p>
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <h2>Total: ${total.toLocaleString()}</h2>
                            <button className="clear-cart-btn" onClick={clearCart}>
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}