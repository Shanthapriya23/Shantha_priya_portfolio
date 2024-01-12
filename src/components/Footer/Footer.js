import { Container } from './styles';
import reactIcon from '../../assets/react-icon.svg';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import telegram from '../../assets/telegram.svg';
import instagramIcon from '../../assets/instagram.svg';
import React from 'react';

export function Footer() {
    return (React.createElement(Container, { className: "footer" },
        React.createElement("a", { href: "https://Mugundh.in", className: "logo" },
            React.createElement("span", null, "mshanthapriya@gmail.com")),
        React.createElement("div", null,
            React.createElement("p", null,
                "This Website was made with ",
                React.createElement("img", { src: reactIcon, alt: "React" }))),
        React.createElement("div", { className: "social-media" },
            React.createElement("a", { href: "https://www.linkedin.com/in/shantha-priya-manikandan-3b506821b/", target: "_blank", rel: "noreferrer" },
                React.createElement("img", { src: linkedin, alt: "Linkedin" })),
            React.createElement("a", { href: "https://github.com/Shanthapriya23", target: "_blank", rel: "noreferrer" },
                React.createElement("img", { src: githubIcon, alt: "GitHub" })),
            React.createElement("a", { href: "https://t.me/+919047994864", target: "_blank", rel: "noreferrer" },
                React.createElement("img", { src: telegram, alt: "telegram" })),
            React.createElement("a", { href: "https://www.instagram.com/_shanthapriya_23/", target: "_blank", rel: "noreferrer" },
                React.createElement("img", { src: instagramIcon, alt: "Instagram" })))));
}
