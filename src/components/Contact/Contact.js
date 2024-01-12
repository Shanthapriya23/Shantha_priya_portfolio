import React from 'react';
import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";
export function Contact() {
    return (React.createElement(Container, { id: "contact" },
        React.createElement("header", null,
            React.createElement("h2", null, "Contact"),
            React.createElement("p", null)),
        React.createElement("div", { className: "contacts" },
            React.createElement("div", null,
                React.createElement("a", { href: "mailto:mshanthapriya@gmail.com" },
                    React.createElement("img", { src: emailIcon, alt: "Email" })),
                React.createElement("a", { href: "mailto:mshanthapriya@gmail.com" }, "mshanthapriya@gmail.com")),
            React.createElement("div", null,
                React.createElement("a", { href: "tel:+919047994864" },
                    React.createElement("img", { src: phoneIcon, alt: "Phone No" })),
                React.createElement("a", { href: "tel:+919047994864" }, "9047994864"))),
        React.createElement(Form, null)));
}
