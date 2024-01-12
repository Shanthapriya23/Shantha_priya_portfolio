import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyle, null),
        React.createElement(Header, null),
        React.createElement(Main, null),
        React.createElement(Footer, null)));
}
export default App;
