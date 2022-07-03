import React from "react";
import SubmitButton from "./submit-button";
import NavigationComponent from "./navigation-component";
import UsernamePassword from "./username-password";

export default class LoginForm extends React.Component {
    render() {
        return (
            <div>
            <NavigationComponent />
            <UsernamePassword />
            <SubmitButton />
            </div>
        )
    }
}