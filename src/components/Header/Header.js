import React from 'react';
import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import CV from '../../assets/Shanthapriya_resume.pdf';
export function Header() {
    var _a = useState(false), isActive = _a[0], setActive = _a[1];
    function toggleTheme() {
        var html = document.getElementsByTagName('html')[0];
        html.classList.toggle('light');
    }
    function closeMenu() {
        setActive(false);
    }
    return (React.createElement(Container, { className: "header-fixed" },
        React.createElement(Router, null,
            React.createElement(HashLink, { smooth: true, to: "#home", className: "logo" },
                React.createElement("span", null, "Shantha Priya"),
                React.createElement("span", null, " M")),
            React.createElement("input", { onChange: toggleTheme, className: "container_toggle", type: "checkbox", id: "switch", name: "mode" }),
            React.createElement("label", { htmlFor: "switch" }, "Toggle"),
            React.createElement("nav", { className: isActive ? 'active' : '' },
                React.createElement(NavHashLink, { smooth: true, to: "#home", onClick: closeMenu }, "Home"),
                React.createElement(NavHashLink, { smooth: true, to: "#about", onClick: closeMenu }, "About me"),
                React.createElement(NavHashLink, { smooth: true, to: "#project", onClick: closeMenu }, "Project"),
                React.createElement(NavHashLink, { smooth: true, to: "#contact", onClick: closeMenu }, "Contact"),
                React.createElement("a", { href: CV, download: true, className: "button" }, "Resume")),
            React.createElement("div", { "aria-expanded": isActive ? 'true' : 'false', "aria-haspopup": "true", "aria-label": isActive ? 'Fechar menu' : 'Abrir menu', className: isActive ? 'menu active' : 'menu', onClick: function () {
                    setActive(!isActive);
                } }))));
}
