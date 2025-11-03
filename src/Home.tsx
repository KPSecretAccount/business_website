import { useNavigate } from 'react-router';

export default function Home() {
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
                <h1>Heritage Home Co</h1>
                <p>Many families want healthier, energy-efficient homes, but most houses on the market are built with outdated methods that waste energy, compromise air quality and ultimately hurt our earth's blueprint. The result? Higher costs, unhealthy living environments and a harmful impact on our planet. Heritage Home Co. fills this gap by designing the home YOU want – prioritizing the planet and people, ultimately offering comfort, long term sustainability and peace of mind.</p>
            </div>
        </div>
    );
}