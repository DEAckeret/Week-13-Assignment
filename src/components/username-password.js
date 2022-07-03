import React from "react";

export default class UsernamePassword extends React.Component {
    render()
        { return (
            <div className="container border border-dark">
                <br></br>
                <h3>Log in</h3>
                <form><br></br>
                    <div className="form-group">Username
                        <input type="username" className="form-control" placeholder="Username"></input>
                    </div><br></br>
                    <div className="form-group">Password
                        <input type="password" className="form-control" placeholder="Password"></input>
                    </div>
                </form><br></br>
            </div>
        )
    }
}