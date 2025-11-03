import { useNavigate } from 'react-router';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Eco-Friendly Home Package",
        price: 25000,
        description: "Complete sustainable home with solar panels, rainwater collection, and energy-efficient insulation."
    },
    {
        id: 2,
        name: "Green Renovation Package",
        price: 7500,
        description: "Transform your existing home with eco-friendly materials, LED lighting, and smart climate control."
    }
];

export default function Products() {
    const navigate = useNavigate();

    const addToCart = (product: Product) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

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
                <h1>Our Products</h1>
                <p>Sustainable home building solutions designed for the future.</p>
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <h2>{product.name}</h2>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">${product.price.toLocaleString()}</p>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}