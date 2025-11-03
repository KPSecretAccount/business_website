import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HashRouter, Route, Routes} from "react-router";
import Settings from "./Settings.tsx";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Products from "./Products.tsx";
//import Cart from "./Cart.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </HashRouter>
    </StrictMode>,
)