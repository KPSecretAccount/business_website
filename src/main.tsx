import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HashRouter, Route, Routes, Outlet, useNavigate} from "react-router";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Products from "./Products.tsx";
import Cart from "./Cart.tsx";

// eslint-disable-next-line react-refresh/only-export-components
function Layout() {
    const navigate = useNavigate();

    return (
        <div>
            <nav>
                <button onClick={() => navigate('/')} className="title">
                    <h1><img src="logoname.png" alt={"Hertiage Home"}/></h1>
                </button>
                <ul>
                    <li><button onClick={() => navigate('/about')}>About</button></li>
                    <li><button onClick={() => navigate('/products')}>Products</button></li>
                    <li><button onClick={() => navigate('/cart')}>Cart</button></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="products" element={<Products />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </HashRouter>
    </StrictMode>,
)