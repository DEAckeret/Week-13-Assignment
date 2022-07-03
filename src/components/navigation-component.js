import React from "react";

export default class NavigationComponent extends React.Component {
    render()
        { return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">The Log-In Page for that Website You Love!</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">The Other Page</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}