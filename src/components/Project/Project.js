import React from 'react';
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";
export function Project() {
    return (React.createElement(Container, { id: "project" },
        React.createElement("h2", null, "My Projects"),
        React.createElement("div", { className: "projects" },
            React.createElement(ScrollAnimation, { animateIn: "flipInX" },
                React.createElement("div", { className: "project" },
                    React.createElement("header", null,
                        React.createElement("svg", { width: "50", xmlns: "http://www.w3.org/2000/svg", role: "img", viewBox: "0 0 24 24", fill: "none", stroke: "#23ce6b ", "stroke-width": "1", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            React.createElement("title", null, "Folder"),
                            React.createElement("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" })),
                        React.createElement("div", { className: "project-links center-image" },
                            React.createElement("a", { href: "https://github.com/Shanthapriya23/Culinary_canvas", target: "_blank", rel: "noreferrer" },
                                React.createElement("img", { src: githubIcon, style: { float: "right" }, alt: "Visit site" })))),
                    React.createElement("div", { className: "body" },
                        React.createElement("h3", null, "Culinary Canvas"),
                        React.createElement("p", null, "Culinary canvas is a website that is built for a restaurant where users can place orders online by adding food items to cart , paying the bill, entering the address details and getting the order delivered. It is a web development project done for the web technologies laboratory in 3rd year of B.Tech IT degree")),
                    React.createElement("footer", null,
                        React.createElement("ul", { className: "tech-list" },
                            React.createElement("li", null, "Java Servlets,Apache Tomcat,HTML,CSS,MySQL"))))),
            React.createElement(ScrollAnimation, { animateIn: "flipInX" },
                React.createElement("div", { className: "project" },
                    React.createElement("header", null,
                        React.createElement("svg", { width: "50", xmlns: "http://www.w3.org/2000/svg", role: "img", viewBox: "0 0 24 24", fill: "none", stroke: "#23ce6b ", "stroke-width": "1", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            React.createElement("title", null, "Folder"),
                            React.createElement("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" })),
                        React.createElement("div", { className: "project-links center-image" },
                            React.createElement("a", { href: "https://github.com/Shanthapriya23/event_management_website", target: "_blank", rel: "noreferrer" },
                                React.createElement("img", { src: githubIcon, style: { float: "right" }, alt: "Visit site" })))),
                    React.createElement("div", { className: "body" },
                        React.createElement("h3", null, "Event Management Platform"),
                        React.createElement("p", null, "This is a basic web development project that bridges the gap between event hosts and the audience.This project is built using postgresql,php,js,html and css")),
                    React.createElement("footer", null,
                        React.createElement("ul", { className: "tech-list" },
                            React.createElement("li", null, "HTML, CSS, JavaScript, Bootstrap, PHP, PosgreSQL"))))),
            React.createElement(ScrollAnimation, { animateIn: "flipInX" },
                React.createElement("div", { className: "project" },
                    React.createElement("header", null,
                        React.createElement("svg", { width: "50", xmlns: "http://www.w3.org/2000/svg", role: "img", viewBox: "0 0 24 24", fill: "none", stroke: "#23ce6b ", "stroke-width": "1", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            React.createElement("title", null, "Folder"),
                            React.createElement("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" })),
                        React.createElement("div", { className: "project-links center-image" },
                            React.createElement("a", { href: "https://github.com/Shanthapriya23/Student_db_management", target: "_blank", rel: "noreferrer" },
                                React.createElement("img", { src: githubIcon, style: { float: "right" }, alt: "Visit site" })))),
                    React.createElement("div", { className: "body" },
                        React.createElement("h3", null, "Student Details Management"),
                        React.createElement("p", null, "This project aims in maintaining the student details in a college database using Basic CRUD (Create , Read , Update , Delete ) Operations. This is a web development project that i did during my 2nd semester for the IT Essentials Laboratory using HTML,CSS,PHP,JS,MySql.")),
                    React.createElement("footer", null,
                        React.createElement("ul", { className: "tech-list" },
                            React.createElement("li", null, "Mongo DB,Express js,React js,Node js,HTML,CSS,Bootstrap"))))),
            React.createElement(ScrollAnimation, { animateIn: "flipInX" },
                React.createElement("div", { className: "project" },
                    React.createElement("header", null,
                        React.createElement("svg", { width: "50", xmlns: "http://www.w3.org/2000/svg", role: "img", viewBox: "0 0 24 24", fill: "none", stroke: "#23ce6b ", "stroke-width": "1", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            React.createElement("title", null, "Folder"),
                            React.createElement("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" })),
                        React.createElement("div", { className: "project-links center-image" },
                            React.createElement("a", { href: "https://github.com/Shanthapriya23/Insight_complete_with_backend", target: "_blank", rel: "noreferrer" },
                                React.createElement("img", { src: githubIcon, style: { float: "right" }, alt: "Visit site" })))),
                    React.createElement("div", { className: "body" },
                        React.createElement("h3", null, "Insight Arithmetic"),
                        React.createElement("p", null, "Insight is a Web platform to teach the middle school students the concepts and techniques of Ancient Vedic Mathematics ,which would help the students by reducing the time consumed in calculation ,there by making mental makes more easier and comfortable to students.")),
                    React.createElement("footer", null,
                        React.createElement("ul", { className: "tech-list" },
                            React.createElement("li", null, "HTML, CSS, JavaScript, Bootstrap, PHP, MySQL"))))),
                            React.createElement(ScrollAnimation, { animateIn: "flipInX" },
                            React.createElement("div", { className: "project" },
                                React.createElement("header", null,
                                    React.createElement("svg", { width: "50", xmlns: "http://www.w3.org/2000/svg", role: "img", viewBox: "0 0 24 24", fill: "none", stroke: "#23ce6b ", "stroke-width": "1", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        React.createElement("title", null, "Folder"),
                                        React.createElement("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" })),
                                    React.createElement("div", { className: "project-links center-image" },
                                        React.createElement("a", { href: "https://github.com/Shanthapriya23/Shantha_priya_portfolio", target: "_blank", rel: "noreferrer" },
                                            React.createElement("img", { src: githubIcon, style: { float: "right" }, alt: "Visit site" })))),
                                React.createElement("div", { className: "body" },
                                    React.createElement("h3", null, "My personal Portfolio"),
                                    React.createElement("p", null, "My personalized and customized portfolio to display my interests, skills, projects and talents")),
                                React.createElement("footer", null,
                                    React.createElement("ul", { className: "tech-list" },
                                        React.createElement("li", null, "Type Script,React js,BootStrap,Mediaquery,HTML,CSS"))))),)));}