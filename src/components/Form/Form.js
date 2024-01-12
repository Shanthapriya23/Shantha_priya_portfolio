import React from 'react';
import { Container, ContainerSucces } from './styles';
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import validator from 'validator';
export function Form() {
    var _a = useForm('mvoeprra'), state = _a[0], handleSubmit = _a[1];
    var _b = useState(false), validEmail = _b[0], setValidEmail = _b[1];
    var _c = useState(false), isHuman = _c[0], setIsHuman = _c[1];
    var _d = useState(''), message = _d[0], setMessage = _d[1];
    function verifyEmail(email) {
        if (validator.isEmail(email)) {
            setValidEmail(true);
        }
        else {
            setValidEmail(false);
        }
    }
    useEffect(function () {
        if (state.succeeded) {
            toast.success('Email successfully sent!', {
                position: toast.POSITION.BOTTOM_LEFT,
                pauseOnFocusLoss: false,
                closeOnClick: true,
                hideProgressBar: false,
                toastId: 'succeeded',
            });
        }
    });
    if (state.succeeded) {
        return (React.createElement(ContainerSucces, null,
            React.createElement("h3", null, "Thanks for getting in touch!"),
            React.createElement("button", { onClick: function () {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } }, "Back to the top"),
            React.createElement(ToastContainer, null)));
    }
    return (React.createElement(Container, null,
        React.createElement("h2", null, "Get in touch using the form"),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("input", { placeholder: "Email", id: "email", type: "email", name: "email", onChange: function (e) {
                    verifyEmail(e.target.value);
                }, required: true }),
            React.createElement(ValidationError, { prefix: "Email", field: "email", errors: state.errors }),
            React.createElement("textarea", { required: true, placeholder: "Send a message to get started.", id: "message", name: "message", onChange: function (e) {
                    setMessage(e.target.value);
                } }),
            React.createElement(ValidationError, { prefix: "Message", field: "message", errors: state.errors }),
            React.createElement("button", { type: "submit" }, "Submit")),
        React.createElement(ToastContainer, null)));
}
