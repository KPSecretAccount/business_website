import { useNavigate } from 'react-router';

export default function Cart() {
    const navigate = useNavigate();

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
                <h1>Cart</h1>
                 </div>
        </div>
    );
}