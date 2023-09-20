import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { StartLoadinConfig } from './store/Slices/Config/ConfigThunks';
import Axios from './axiosConfig';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StartLoadinBanner } from './store/Slices/banner/BannerThunks';

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(StartLoadinConfig())
        dispatch(StartLoadinBanner())

    }, [])




    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
