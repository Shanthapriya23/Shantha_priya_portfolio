import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import instagramIcon from '../../assets/instagram.svg';
import Hello from '../../assets/Hello.gif';
import leetcode from '../../assets/leetcode.png';
export function Hero() {
    return (React.createElement(Container, { id: "home" },
        React.createElement("div", { className: "hero-text" },
            React.createElement(ScrollAnimation, { animateIn: "fadeInUp" },
                React.createElement("p", null,
                    "Hello ",
                    React.createElement("img", { src: Hello, alt: "Hello", width: "20px" }),
                    ", I'm")),
            React.createElement(ScrollAnimation, { animateIn: "fadeInUp", delay: 0.2 * 1000 },
                React.createElement("h1", null, "Shantha Priya Manikandan")),
            React.createElement(ScrollAnimation, { animateIn: "fadeInUp", delay: 0.4 * 1000 },
                React.createElement("h3", null, "Full Stack Developer")),
            React.createElement(ScrollAnimation, { animateIn: "fadeInUp", delay: 0.6 * 1000 },
                React.createElement("p", { className: "small-resume" }, "College Of Engineering Guindy, Anna University.")),
            React.createElement(ScrollAnimation, { animateIn: "fadeInUp", delay: 0.8 * 1000 },
                React.createElement(BrowserRouter, null,
                    React.createElement(NavHashLink, { smooth: true, to: "#contact", className: "button" }, "Contact"))),
            React.createElement(ScrollAnimation, { animateIn: "fadeInUp", delay: 1 * 1000 },
                React.createElement("div", { className: "social-media" },
                    React.createElement("a", { href: "https://www.linkedin.com/in/shantha-priya-manikandan-3b506821b/", target: "_blank", rel: "noreferrer" },
                        React.createElement("img", { src: linkedin, alt: "Linkedin" })),
                    React.createElement("a", { href: "https://github.com/Shanthapriya23", target: "_blank", rel: "noreferrer" },
                        React.createElement("img", { src: githubIcon, alt: "GitHub" })),
                    React.createElement("a", { href: "https://leetcode.com/S_priya_m/", target: "_blank", rel: "noreferrer" },
                        React.createElement("img", { src: leetcode, alt: "leetcode" })),
                    React.createElement("a", { href: "https://www.instagram.com/_shanthapriya_23/", target: "_blank", rel: "noreferrer" },
                        React.createElement("img", { src: instagramIcon, alt: "Instagram" }))))),
        React.createElement("div", { className: "hero-image" },
            React.createElement(ScrollAnimation, { animateIn: "fadeInRight", delay: 1 * 1000 },
                React.createElement("img", { src: Illustration, alt: "Ilustra\u00E7\u00E3o" })))));
}
