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
import cIcon from '../../assets/c.svg';
import cppIcon from '../../assets/cpp.svg';
import javaIcon from '../../assets/java.svg';
import pythonIcon from '../../assets/python.svg';
import htmlIcon from '../../assets/html-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import jsIcon from '../../assets/js-icon.svg';
import phpIcon from '../../assets/php.png';
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import mysqlIcon from '../../assets/mysql.svg';
import mongodbIcon from '../../assets/mongodb.svg';
import gitIcon from '../../assets/git.svg';
import figmaIcon from '../../assets/figma.svg';

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
                React.createElement("p", { className: "small-resume" }, "A Passionate software developer and a technology enthusiast who has interest in Problem solving (DSA), System design, Fullstack and Web development.")),
            React.createElement(ScrollAnimation, { animateIn: "fadeInUp", delay: 0.7 * 1000 },
                React.createElement("h3", null, "Here are my main skills:")),
            React.createElement(ScrollAnimation, { animateIn: "fadeInUp", delay: 0.8 * 1000 },
                React.createElement("div", { className: "hard-skills", id: "skills" },
                    React.createElement("img", { src: cIcon, alt: "C" }),
                    React.createElement("img", { src: cppIcon, alt: "C++" }),
                    React.createElement("img", { src: javaIcon, alt: "Java" }),
                    React.createElement("img", { src: pythonIcon, alt: "Python" }),
                    React.createElement("img", { src: mysqlIcon, alt: "MySQL" }),
                    React.createElement("img", { src: htmlIcon, alt: "HTML5" }),
                    React.createElement("img", { src: cssIcon, alt: "CSS3" }),
                    React.createElement("img", { src: jsIcon, alt: "JavaScript" }),
                    React.createElement("img", { src: phpIcon, alt: "PHP" }),
                    React.createElement("img", { src: reactIcon, alt: "React" }),
                    React.createElement("img", { src: nodeIcon, alt: "Node.js" }),
                    React.createElement("img", { src: mongodbIcon, alt: "MongoDB" }),
                    React.createElement("img", { src: gitIcon, alt: "Git" }),
                    React.createElement("img", { src: figmaIcon, alt: "Figma" }))),
            React.createElement(ScrollAnimation, { animateIn: "fadeInUp", delay: 1 * 1000 },
                React.createElement("div", { className: "social-media" },
                    React.createElement(ScrollAnimation, { animateIn: "fadeInUp", delay: 0.7 * 1000 },
                        React.createElement("h3", null, "My social handles:")),
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
                React.createElement("img", { src: Illustration, alt: "Illustration" })))));
}